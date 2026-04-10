const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Твой секретный ключ теперь живет на сервере, а не в браузере!
const RAPID_API_KEY = process.env.RAPID_API_KEY; 

app.use(cors());
app.use(express.json());

// Отдаем файлы сайта (index.html, style.css, script.js)
app.use(express.static(__dirname));

// Наш собственный API для скачивания
app.post('/api/download', async (req, res) => {
    const { url } = req.body;

    if (!url) return res.status(400).json({ error: 'URL is required' });

    try {
        // Сервер сам стучится в RapidAPI
        const response = await fetch('https://auto-download-all-in-one.p.rapidapi.com/v1/social/autolink', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': RAPID_API_KEY,
                'X-RapidAPI-Host': 'auto-download-all-in-one.p.rapidapi.com'
            },
            body: JSON.stringify({ url: url })
        });

        const data = await response.json();
        res.json(data); // Отправляем результат обратно в браузер
    } catch (error) {
        console.error('Server API Error:', error);
        res.status(500).json({ error: 'Failed to fetch media' });
    }
});

app.listen(PORT, () => {
    console.lang=`SYSTEM CORE ONLINE. Port: ${PORT}`;
});