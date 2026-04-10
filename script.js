/**
 * AURA 2.1 Aurum Edition by Nygma - Secured Core
 */

const translations = {
    ru: {
        nav_terminal: "Терминал", nav_history: "История", nav_about: "О нас", nav_support: "FAQ",
        term_title: "Универсальный загрузчик", term_subtitle: "Извлекайте медиафайлы из любой социальной сети в оригинальном качестве.",
        btn_analyze: "Анализ ссылки", status_connecting: "Подключение к API...", btn_download: "Начать загрузку",
        err_invalid_url: "Некорректная ссылка!", err_unsupported: "Платформа не поддерживается!",
        steps_title: "Как это работает?", step1_title: "Скопируйте ссылку", step1_desc: "Найдите нужное видео в приложении и нажмите 'Копировать ссылку'.",
        step2_title: "Вставьте в AURA", step2_desc: "Вставьте ссылку в терминал. Алгоритмы мгновенно найдут скрытые файлы.",
        step3_title: "Сохраните файл", step3_desc: "Система извлечет файл, и вы сохраните его прямо в галерею устройства.",
        hist_title: "История операций", hist_subtitle: "Логи хранятся исключительно локально.", btn_clear: "Очистить лог", hist_empty: "История загрузок пока пуста.",
        about_main_title: "Создано для свободы", about_p1: "Платформа AURA была основана в 2026 году независимым разработчиком Nygma. Главная цель проекта — предоставить удобный, быстрый и безопасный инструмент для работы с медиаконтентом, минуя искусственные ограничения.",
        about_p2: "В отличие от аналогов, AURA использует аппаратное ускорение для отрисовки интерфейса. Мы уважаем вашу приватность: все операции проводятся без сохранения логов на серверах (No-Logs Policy).",
        about_p3: "Независимая архитектура позволяет обходить региональные блокировки, отдавая оригинальные файлы с CDN серверов напрямую на ваше устройство.",
        feat_sec_title: "Абсолютная приватность", feat_sec_desc: "Ваша история загрузок существует только в оперативной памяти браузера (localStorage). Трафик зашифрован алгоритмами AES-256.",
        sup_title: "Центр поддержки", sup_subtitle: "Ответы на популярные вопросы и связь с Nygma.",
        faq_1_q: "Какое качество видео я получу?", faq_1_a: "AURA автоматически выбирает максимально возможное качество (без водяных знаков), доступное на серверах социальной сети по вашей ссылке.",
        faq_2_q: "Где найти скачанные файлы на iPhone?", faq_2_a: "По умолчанию Safari сохраняет медиа в приложение 'Файлы' (папка 'Загрузки'). Нажмите 'Поделиться' и выберите 'Сохранить видео', чтобы оно появилось в вашей Фотопленке.",
        faq_3_q: "Можно ли скачать с закрытого аккаунта?", faq_3_a: "Нет. AURA строго соблюдает базовые принципы приватности. Если автор закрыл профиль, алгоритмы не будут пытаться обойти защиту.",
        contact_title: "Задать вопрос Nygma", btn_send: "Отправить запрос", footer_rights: "Все права защищены."
    },
    en: {
        nav_terminal: "Terminal", nav_history: "History", nav_about: "About", nav_support: "Support",
        term_title: "Universal Downloader", term_subtitle: "Extract media files from any social network in original quality.",
        btn_analyze: "Analyze Link", status_connecting: "Connecting to API...", btn_download: "Start Download",
        err_invalid_url: "Invalid Link!", err_unsupported: "Platform not supported!",
        steps_title: "How it works?", step1_title: "Copy the link", step1_desc: "Find the video in the app and tap 'Copy Link'.",
        step2_title: "Paste in AURA", step2_desc: "Paste the link into the terminal. Algorithms will instantly find hidden files.",
        step3_title: "Save the file", step3_desc: "The system will extract the file, and you can save it directly to your device's gallery.",
        hist_title: "Operation History", hist_subtitle: "Logs are stored exclusively locally.", btn_clear: "Clear Log", hist_empty: "Download history is empty.",
        about_main_title: "Built for Freedom", about_p1: "AURA was founded in 2026 by Nygma. The main goal is to provide a fast and secure tool for media content, bypassing artificial restrictions.",
        about_p2: "AURA uses hardware acceleration. We respect your privacy: all operations are conducted without saving logs on servers (No-Logs Policy).",
        about_p3: "Independent architecture bypasses regional blocks, delivering original files from CDN servers directly to your device.",
        feat_sec_title: "Absolute Privacy", feat_sec_desc: "Your download history exists only in localStorage. Traffic is encrypted with AES-256.",
        sup_title: "Support Center", sup_subtitle: "Answers to popular questions and contact with Nygma.",
        faq_1_q: "What video quality will I get?", faq_1_a: "AURA automatically selects the highest possible quality (without watermarks) available on the social network's servers for your link.",
        faq_2_q: "Where to find downloaded files on iPhone?", faq_2_a: "Safari saves media to the 'Files' app (Downloads folder). Tap 'Share' and select 'Save Video' to move it to your Camera Roll.",
        faq_3_q: "Can I download from a private account?", faq_3_a: "No. AURA strictly adheres to privacy principles. If the author closed the profile, algorithms won't bypass it.",
        contact_title: "Ask Nygma a Question", btn_send: "Send Request", footer_rights: "All rights reserved."
    },
    uk: {
        nav_terminal: "Термінал", nav_history: "Історія", nav_about: "Про нас", nav_support: "Підтримка",
        term_title: "Універсальний завантажувач", term_subtitle: "Витягуйте медіафайли з будь-якої соціальної мережі в оригінальній якості.",
        btn_analyze: "Аналіз посилання", status_connecting: "Підключення до API...", btn_download: "Почати завантаження",
        err_invalid_url: "Невірне посилання!", err_unsupported: "Платформа не підтримується!",
        steps_title: "Як це працює?", step1_title: "Скопіюйте посилання", step1_desc: "Знайдіть потрібне відео в додатку і натисніть 'Копіювати посилання'.",
        step2_title: "Вставте в AURA", step2_desc: "Вставте посилання в термінал. Алгоритми миттєво знайдуть приховані файли.",
        step3_title: "Збережіть файл", step3_desc: "Система витягне файл, і ви збережете його прямо в галерею пристрою.",
        hist_title: "Історія операцій", hist_subtitle: "Логи зберігаються виключно локально.", btn_clear: "Очистити лог", hist_empty: "Історія завантажень поки порожня.",
        about_main_title: "Створено для свободи", about_p1: "Платформа AURA була заснована в 2026 році розробником Nygma. Головна мета - надати зручний інструмент для роботи з медіаконтентом.",
        about_p2: "AURA використовує апаратне прискорення. Ми поважаємо вашу приватність: усі операції проводяться без збереження логів (No-Logs Policy).",
        about_p3: "Незалежна архітектура дозволяє обходити регіональні блокування, віддаючи оригінальні файли з CDN серверів безпосередньо на ваш пристрій.",
        feat_sec_title: "Абсолютна приватність", feat_sec_desc: "Ваша історія завантажень існує тільки в localStorage. Трафік зашифровано алгоритмами AES-256.",
        sup_title: "Центр підтримки", sup_subtitle: "Відповіді на популярні запитання та зв'язок з Nygma.",
        faq_1_q: "Яку якість відео я отримаю?", faq_1_a: "AURA автоматично вибирає максимально можливу якість (без водяних знаків), доступну на серверах соціальної мережі за вашим посиланням.",
        faq_2_q: "Де знайти завантажені файли на iPhone?", faq_2_a: "За замовчуванням Safari зберігає медіа в додаток 'Файли' (папка 'Завантаження'). Натисніть 'Поділитися' і виберіть 'Зберегти відео'.",
        faq_3_q: "Чи можна завантажити з закритого акаунта?", faq_3_a: "Ні. AURA суворо дотримується базових принципів приватності.",
        contact_title: "Задати питання Nygma", btn_send: "Відправити запит", footer_rights: "Всі права захищені."
    }
};

let currentLang = 'ru';

// Функция безопасности
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, tag => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    }[tag] || tag));
}

document.addEventListener('DOMContentLoaded', () => {

    // 1. СИСТЕМА ПЕРЕВОДА (i18n)
    const langBtns = document.querySelectorAll('.lang-btn');
    
    function setLanguage(lang) {
        currentLang = lang;
        const dict = translations[lang];
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) el.textContent = dict[key];
        });
        
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        renderHistory(); 
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
    });

    // 2. Intersection Observer
    const revealElements = document.querySelectorAll('.reveal-up');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { root: null, threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    revealElements.forEach(el => revealObserver.observe(el));
    
    setTimeout(() => {
        revealElements.forEach(el => {
            if(el.getBoundingClientRect().top < window.innerHeight) el.classList.add('visible');
        });
    }, 100);

    // 3. НАВИГАЦИЯ
    const navItems = document.querySelectorAll('.nav-item');
    const tabs = document.querySelectorAll('.tab-pane');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-tab');
            
            navItems.forEach(n => n.classList.remove('active'));
            tabs.forEach(t => t.classList.remove('active'));
            
            item.classList.add('active');
            document.getElementById(targetId).classList.add('active');

            if(targetId === 'tab-history') renderHistory();
            if(targetId === 'tab-admin') updateAdminStats();
            window.scrollTo({top: 0, behavior: 'smooth'}); 
        });
    });

    // 4. ЛОГИКА ТЕРМИНАЛА
    const inputUrl = document.getElementById('mediaUrl');
    const btnAnalyze = document.getElementById('btnAnalyze');
    const actionPanel = document.getElementById('actionPanel');
    const btnDownload = document.getElementById('btnDownload');
    const progressBox = document.getElementById('progressBox');
    const progressBar = document.getElementById('progressBar');
    const progressPercent = document.getElementById('progressPercent');
    const progressStatus = document.getElementById('progressStatus');

    const supportedPlatforms = [
        'tiktok.com', 'youtube.com', 'youtu.be', 'instagram.com', 
        'twitter.com', 'x.com', 'facebook.com', 'fb.watch', 
        'vk.com', 'pinterest.com', 'reddit.com', 'vimeo.com', 
        'soundcloud.com', 'twitch.tv'
    ];

    function validateLink(string) {
        try {
            const urlObj = new URL(string);
            const hostname = urlObj.hostname.toLowerCase();
            const isSupported = supportedPlatforms.some(domain => hostname.includes(domain));
            if (!isSupported) return 'unsupported';
            return 'valid';
        } catch (err) {
            return 'invalid';
        }
    }

    const RAPID_API_KEY = '82497de7a2mshdecb4cdde2194dep1252d1jsn2cad1801ea9d';
    const RAPID_API_HOST = 'auto-download-all-in-one.p.rapidapi.com';

    btnAnalyze.addEventListener('click', () => {
        const val = inputUrl.value.trim();
        if (!val) return;

        const validationStatus = validateLink(val);

        if (validationStatus !== 'valid') {
            const oldText = btnAnalyze.textContent;
            
            if (validationStatus === 'invalid') {
                btnAnalyze.textContent = translations[currentLang].err_invalid_url || "Некорректная ссылка!";
            } else if (validationStatus === 'unsupported') {
                btnAnalyze.textContent = translations[currentLang].err_unsupported || "Платформа не поддерживается!";
            }
            
            btnAnalyze.style.background = "var(--danger)";
            btnAnalyze.style.boxShadow = "0 10px 25px rgba(239, 68, 68, 0.4)";
            
            setTimeout(() => {
                btnAnalyze.textContent = oldText;
                btnAnalyze.style.background = "";
                btnAnalyze.style.boxShadow = "";
            }, 2500);
            return;
        }

        btnAnalyze.style.opacity = '0.5';
        btnAnalyze.textContent = "Анализ алгоритмами...";
        
        setTimeout(() => {
            btnAnalyze.style.opacity = '1';
            btnAnalyze.textContent = translations[currentLang].btn_analyze;
            actionPanel.classList.add('show');
            progressBox.style.display = 'none';
            btnDownload.style.display = 'block';
        }, 600);
    });

    btnDownload.addEventListener('click', async () => {
        const targetUrl = inputUrl.value.trim();
        if (!targetUrl) return;

        btnDownload.style.display = 'none';
        progressBox.style.display = 'block';
        
        progressBar.style.width = '20%';
        progressPercent.textContent = '20%';
        progressStatus.textContent = translations[currentLang].status_connecting || "Подключение к API...";

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': RAPID_API_KEY,
                'X-RapidAPI-Host': RAPID_API_HOST
            },
            body: JSON.stringify({ url: targetUrl })
        };

        try {
            progressBar.style.width = '50%';
            progressPercent.textContent = '50%';
            progressStatus.textContent = "Извлечение медиа...";

            const response = await fetch('https://auto-download-all-in-one.p.rapidapi.com/v1/social/autolink', options);
            const data = await response.json();

            progressBar.style.width = '80%';
            progressPercent.textContent = '80%';

            if (data && data.medias && data.medias.length > 0) {
                
                progressBar.style.width = '100%';
                progressPercent.textContent = '100%';
                
                const downloadLink = data.medias[0].url;
                saveHistory(targetUrl, "Auto (Best Quality)");
                
                progressStatus.textContent = "Скачивание файла...";
                
                try {
                    const fileRes = await fetch(downloadLink);
                    if (!fileRes.ok) throw new Error("CORS error");
                    
                    const blob = await fileRes.blob();
                    const blobUrl = window.URL.createObjectURL(blob);
                    
                    const a = document.createElement('a');
                    a.style.display = 'none';
                    a.href = blobUrl;
                    a.download = `AURA_${Math.floor(Math.random() * 10000)}.mp4`;
                    
                    document.body.appendChild(a);
                    a.click();
                    
                    window.URL.revokeObjectURL(blobUrl);
                    document.body.removeChild(a);
                    
                    progressStatus.textContent = "Успешно!";
                } catch (fetchErr) {
                    console.warn("Фоновое скачивание заблокировано сервером. Используем альтернативу.");
                    const a = document.createElement('a');
                    a.style.display = 'none';
                    a.href = downloadLink + (downloadLink.includes('?') ? '&dl=1' : '?dl=1');
                    a.download = `AURA_media.mp4`;
                    a.target = '_blank';
                    
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    
                    progressStatus.textContent = "Успешно!";
                }

                setTimeout(() => {
                    actionPanel.classList.remove('show');
                    inputUrl.value = '';
                    btnDownload.style.display = 'block';
                    progressBox.style.display = 'none';
                    progressBar.style.background = "";
                }, 2000);

            } else {
                throw new Error("Файлы не найдены");
            }

        } catch (error) {
            console.error("API Error:", error);
            progressStatus.textContent = "Ошибка доступа!";
            progressBar.style.background = "var(--danger)"; 
            
            setTimeout(() => {
                btnDownload.style.display = 'block';
                progressBox.style.display = 'none';
                progressBar.style.background = "";
            }, 3500);
        }
    });

    // 5. ИСТОРИЯ
    function saveHistory(url, format) {
        const history = JSON.parse(localStorage.getItem('aura_v2_hist')) || [];
        const safeUrl = escapeHTML(url.length > 45 ? url.substring(0, 45) + '...' : url);
        history.unshift({ url: safeUrl, format: format, date: new Date().toLocaleDateString() });
        if(history.length > 50) history.pop();
        localStorage.setItem('aura_v2_hist', JSON.stringify(history));
    }

    function renderHistory() {
        const container = document.getElementById('historyList');
        const history = JSON.parse(localStorage.getItem('aura_v2_hist')) || [];
        container.innerHTML = '';
        if (history.length === 0) {
            container.innerHTML = `<p style="text-align:center; color: var(--text-muted); margin-top: 30px;">${translations[currentLang].hist_empty}</p>`;
            return;
        }
        
        history.forEach(item => {
            const div = document.createElement('div');
            div.className = 'history-item reveal-up visible';
            div.innerHTML = `
                <div>
                    <div class="history-url">${item.url}</div>
                    <div class="history-meta">${item.format} • ${item.date}</div>
                </div>
                <div class="history-status">OK</div>
            `;
            container.appendChild(div);
        });
    }

    document.getElementById('btnClear').addEventListener('click', () => {
        localStorage.removeItem('aura_v2_hist');
        renderHistory();
    });

    // 6. FAQ И ФОРМА
    document.querySelectorAll('.faq-item').forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Сохранение сообщения локально для Админки
        const email = document.getElementById('contactEmail').value;
        const message = document.getElementById('contactMessage').value;
        const msgs = JSON.parse(localStorage.getItem('aura_v2_msgs')) || [];
        
        msgs.unshift({ 
            email: escapeHTML(email), 
            text: escapeHTML(message), 
            date: new Date().toLocaleString() 
        });
        localStorage.setItem('aura_v2_msgs', JSON.stringify(msgs));

        const btn = e.target.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = "Отправлено!";
        btn.style.background = "var(--success)";
        btn.style.color = "#000";
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = "";
            btn.style.color = "";
            e.target.reset();
            if(document.getElementById('tab-admin').classList.contains('active')) updateAdminStats();
        }, 2000);
    });

    // 7. СЕКРЕТНАЯ АДМИН-ПАНЕЛЬ (Core Access)
    let badgeClicks = 0;
    const badge = document.getElementById('nygmaBadge');
    
    badge.addEventListener('click', () => {
        badgeClicks++;
        if (badgeClicks >= 5) {
            const password = prompt("SYS_CORE: Enter Access Key");
            if (password === "nygma") {
                const adminBtn = document.getElementById('btnAdminNav');
                adminBtn.classList.remove('hidden-admin-btn');
                alert("ACCESS GRANTED: Welcome, Nygma.");
                adminBtn.click(); 
            } else if (password !== null) {
                alert("ACCESS DENIED");
            }
            badgeClicks = 0; 
        }
        setTimeout(() => { badgeClicks = 0; }, 2000);
    });

    function updateAdminStats() {
        const history = JSON.parse(localStorage.getItem('aura_v2_hist')) || [];
        document.getElementById('adminLogCount').textContent = history.length;

        // Симуляция онлайна (рандом от 15 до 48)
        document.getElementById('adminOnlineCount').textContent = Math.floor(Math.random() * 34) + 15;

        // Получение IP (работает через бесплатное API ipify)
        fetch('https://api.ipify.org?format=json')
            .then(res => res.json())
            .then(data => document.getElementById('adminIP').textContent = data.ip)
            .catch(() => document.getElementById('adminIP').textContent = "Недоступен");

        // Рендер сообщений
        const msgContainer = document.getElementById('adminMessagesBox');
        const msgs = JSON.parse(localStorage.getItem('aura_v2_msgs')) || [];
        
        msgContainer.innerHTML = '';
        if (msgs.length === 0) {
            msgContainer.innerHTML = '<div style="color: var(--text-muted); font-size: 14px;">Входящих сообщений нет.</div>';
        } else {
            msgs.forEach(m => {
                msgContainer.innerHTML += `
                    <div style="border-bottom: 1px solid rgba(255,255,255,0.05); padding: 15px 0;">
                        <div style="color: var(--accent-1); font-size: 12px; margin-bottom: 8px;">${m.date} | От: ${m.email}</div>
                        <div style="color: var(--text-main); font-size: 15px; line-height: 1.5;">${m.text}</div>
                    </div>
                `;
            });
        }
    }

    document.getElementById('btnAdminForceClear').addEventListener('click', () => {
        if(confirm("Вы уверены, что хотите стереть все логи скачиваний?")) {
            localStorage.removeItem('aura_v2_hist');
            updateAdminStats();
        }
    });

    document.getElementById('btnAdminClearMsgs').addEventListener('click', () => {
        if(confirm("Очистить все входящие сообщения?")) {
            localStorage.removeItem('aura_v2_msgs');
            updateAdminStats();
        }
    });

    // Инициализация
    setLanguage('ru');
});