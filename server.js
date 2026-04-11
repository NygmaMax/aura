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

// База пользователей (с дефолтной аватаркой)
let users = [
    { username: 'nygma', password: '123', role: 'admin', avatar: '1' }
];
let activeSessions = new Map();

// --- АВТОРИЗАЦИЯ И ПРОФИЛЬ ---
app.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    if (users.find(u => u.username === username)) {
        return res.status(400).json({ error: 'Пользователь уже существует' });
    }
    users.push({ username, password, role: 'user', avatar: '1' });
    res.json({ success: true, username, role: 'user', avatar: '1' });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) return res.status(401).json({ error: 'Неверный логин или пароль' });
    res.json({ success: true, username: user.username, role: user.role, avatar: user.avatar });
});

app.post('/api/update-avatar', (req, res) => {
    const { username, avatar } = req.body;
    let user = users.find(u => u.username === username);
    if (user) {
        user.avatar = avatar;
        return res.json({ success: true });
    }
    res.status(400).json({ error: 'User not found' });
});

// --- API ЗАГРУЗКИ ---
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

app.get('/api/stream', async (req, res) => {
    const fileUrl = req.query.url;
    const isAudio = req.query.type === 'audio';
    const userIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    
    if (!fileUrl) return res.status(400).send('No URL provided');

    if (activeSessions.has(userIP)) {
        let session = activeSessions.get(userIP);
        session.downloads = (session.downloads || 0) + 1;
        activeSessions.set(userIP, session);
    }

    try {
        const response = await fetch(fileUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
                'Accept': '*/*',
                'Connection': 'keep-alive'
            }
        });

        if (!response.ok) return res.redirect(fileUrl);
        
        const fileName = isAudio ? "AURA_Audio.mp3" : "AURA_Media.mp4";
        res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
        res.setHeader('Content-Type', 'application/octet-stream'); 
        
        if (response.headers.get('content-length')) {
            res.setHeader('Content-Length', response.headers.get('content-length'));
        }

        Readable.fromWeb(response.body).pipe(res);
    } catch (err) {
        res.redirect(fileUrl);
    }
});

app.post('/api/messages', (req, res) => {
    const { email, text } = req.body;
    messages.unshift({ email, text, date: new Date().toLocaleString() });
    if (messages.length > 50) messages.pop();
    res.json({ success: true });
});

app.get('/api/messages', (req, res) => res.json(messages));
app.delete('/api/messages', (req, res) => { messages = []; res.json({ success: true }); });

app.post('/api/ping', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const { username, role } = req.body; 
    let currentDownloads = activeSessions.has(ip) ? activeSessions.get(ip).downloads : 0;

    activeSessions.set(ip, {
        lastSeen: Date.now(),
        username: username || null,
        role: role || 'visitor',
        downloads: currentDownloads || 0
    });
    res.json({ success: true });
});

app.get('/api/stats', (req, res) => {
    const now = Date.now();
    let sessionsData = [];
    for (let [ip, data] of activeSessions.entries()) {
        if (now - data.lastSeen > 15000) activeSessions.delete(ip);
        else sessionsData.push({ ip, username: data.username, role: data.role, downloads: data.downloads });
    }
    res.json({ online: activeSessions.size, sessions: sessionsData });
});

app.listen(PORT, () => console.log(`SYSTEM CORE ONLINE. Port: ${PORT}`));
