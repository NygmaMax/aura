const express = require('express');
const cors = require('cors');
const path = require('path');
const { Readable } = require('stream');

const app = express();
const PORT = process.env.PORT || 3000;
const RAPID_API_KEY = process.env.RAPID_API_KEY;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

let messages = [];
let activeSessions = new Map();

// 1. Получение прямой ссылки
app.post('/api/download-info', async (req, res) => {
    const { url } = req.body;
    if (!url) return res.status(400).json({ error: 'URL is required' });

    try {
        const response = await fetch('https://auto-download-all-in-one.p.rapidapi.com/v1/social/autolink', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': RAPID_API_KEY,
                'X-RapidAPI-Host': 'auto-download-all-in-one.p.rapidapi.com'
            },
            body: JSON.stringify({ url })
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'API Error' });
    }
});

// 2. ЖЕСТКОЕ ПРОКСИРОВАНИЕ (С маскировкой)
app.get('/api/stream', async (req, res) => {
    const fileUrl = req.query.url;
    if (!fileUrl) return res.status(400).send('No URL provided');

    try {
        // Притворяемся мобильным браузером Safari, чтобы обмануть защиту CDN соцсетей
        const response = await fetch(fileUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
                'Accept': '*/*',
                'Connection': 'keep-alive'
            }
        });

        // Если сервер всё равно заблокирован, НЕ выдаем ошибку (чтобы не было файла 21 байт)
        // Вместо этого перенаправляем браузер пользователя напрямую на видео
        if (!response.ok) {
            console.log(`Proxy blocked (${response.status}). Redirecting directly to file.`);
            return res.redirect(fileUrl);
        }
        
        // Заставляем браузер именно СКАЧИВАТЬ файл, а не открывать плеер
        res.setHeader('Content-Disposition', 'attachment; filename="AURA_Video.mp4"');
        res.setHeader('Content-Type', 'application/octet-stream'); 
        
        if (response.headers.get('content-length')) {
            res.setHeader('Content-Length', response.headers.get('content-length'));
        }

        Readable.fromWeb(response.body).pipe(res);
    } catch (err) {
        console.error('Stream error:', err);
        res.redirect(fileUrl); // Последняя линия защиты
    }
});

// 3. БАЗА СООБЩЕНИЙ
app.post('/api/messages', (req, res) => {
    const { email, text } = req.body;
    messages.unshift({ email, text, date: new Date().toLocaleString() });
    if (messages.length > 50) messages.pop();
    res.json({ success: true });
});

app.get('/api/messages', (req, res) => {
    res.json(messages);
});

app.delete('/api/messages', (req, res) => {
    messages = [];
    res.json({ success: true });
});

// 4. ТРЕКИНГ РЕАЛЬНОГО ОНЛАЙНА
app.post('/api/ping', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    activeSessions.set(ip, Date.now());
    res.json({ success: true });
});

app.get('/api/stats', (req, res) => {
    const now = Date.now();
    for (let [ip, lastSeen] of activeSessions.entries()) {
        if (now - lastSeen > 15000) {
            activeSessions.delete(ip);
        }
    }
    res.json({ online: activeSessions.size });
});

app.listen(PORT, () => {
    console.log(`SYSTEM CORE ONLINE. Port: ${PORT}`);
});
