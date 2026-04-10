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

// База в оперативной памяти сервера
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

// 2. ЖЕСТКОЕ ПРОКСИРОВАНИЕ (Без плеера)
app.get('/api/stream', async (req, res) => {
    const fileUrl = req.query.url;
    if (!fileUrl) return res.status(400).send('No URL provided');

    try {
        const response = await fetch(fileUrl);
        if (!response.ok) throw new Error(`HTTP error!`);
        
        // Убиваем попытки браузера открыть плеер
        res.setHeader('Content-Disposition', 'attachment; filename="AURA_Video.mp4"');
        res.setHeader('Content-Type', 'application/octet-stream'); // Говорим браузеру: "это бинарник, только качать!"
        
        Readable.fromWeb(response.body).pipe(res);
    } catch (err) {
        console.error('Stream error:', err);
        res.status(500).send('Failed to stream file');
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
    // Удаляем тех, кто не пинговал больше 15 секунд (закрыл вкладку)
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
