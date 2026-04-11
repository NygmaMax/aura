/**
 * AURA 2.5 - Client Core
 */

const translations = {
    ru: { nav_terminal: "Терминал", nav_history: "История", nav_about: "О нас", nav_support: "FAQ", term_title: "Универсальный загрузчик", term_subtitle: "Извлекайте медиафайлы из любой социальной сети в оригинальном качестве.", btn_analyze: "Анализ ссылки", status_connecting: "Подключение...", btn_download: "Начать загрузку", steps_title: "Как это работает?", step1_title: "Скопируйте ссылку", step1_desc: "Найдите нужное видео в приложении и нажмите 'Копировать ссылку'.", step2_title: "Вставьте в AURA", step2_desc: "Алгоритмы мгновенно найдут скрытые файлы.", step3_title: "Сохраните файл", step3_desc: "Выберите формат и сохраните.", hist_title: "История операций", hist_subtitle: "Логи хранятся локально.", btn_clear: "Очистить лог", about_main_title: "Создано для свободы", about_p1: "Платформа AURA была основана в 2026 году независимым разработчиком Nygma. Изначально задуманная как десктопное приложение на Flet, AURA эволюционировала в мощный Full-Stack веб-сервис.", about_p2: "Наша архитектура 'Aurum Obsidian' объединяет максимальную производительность с элитарным дизайном.", feat_sec_title: "Абсолютная приватность", feat_sec_desc: "Ваша история загрузок существует только в оперативной памяти.", feat_sec_title_2: "Direct Stream", feat_sec_desc_2: "Прямое проксирование файлов через наши сервера.", sup_title: "Центр поддержки", sup_subtitle: "Ответы на популярные вопросы и связь с Nygma.", faq_1_q: "Какое качество видео я получу?", faq_1_a: "AURA автоматически выбирает максимально возможное качество.", faq_2_q: "Где найти файлы на iPhone?", faq_2_a: "Ищите в приложении 'Файлы' (папка Загрузки).", faq_3_q: "Можно ли скачать аудио отдельно?", faq_3_a: "Да, просто выберите 'Только звук (MP3)' в меню форматов.", faq_4_q: "Что дает подписка PRO?", faq_4_a: "PRO-аккаунт открывает доступ к скачиванию в 4K и снимает лимиты.", contact_title: "Задать вопрос Nygma", btn_send: "Отправить запрос", footer_rights: "Все права защищены.", btn_login: "Войти", btn_reg: "Регистрация", auth_title: "Вход в систему", prof_settings: "Настройки аккаунта:", prof_avatar: "Выберите Аватар", prof_email: "Привязать Email", prof_save: "Сохранить", prof_logout: "Выйти из аккаунта", prof_format: "Выберите формат и качество:", pro_title: "AURA PRO", pro_desc: "Расширьте свои возможности до максимума.", pro_f1: "✓ Загрузка в качестве 4K ULTRA HD", pro_f2: "✓ Безлимитное скачивание (свыше 10 раз в день)", pro_f3: "✓ Приоритетные выделенные сервера (Скорость)", pro_f4: "✓ Эксклюзивный PRO-бейдж в профиле", pro_btn: "Оформить подписку", ad_sponsor: "Спонсор" },
    en: { nav_terminal: "Terminal", nav_history: "History", nav_about: "About", nav_support: "Support", term_title: "Universal Downloader", term_subtitle: "Extract media files from any social network.", btn_analyze: "Analyze Link", status_connecting: "Connecting...", btn_download: "Start Download", steps_title: "How it works?", step1_title: "Copy link", step1_desc: "Find video and copy link.", step2_title: "Paste in AURA", step2_desc: "Algorithms will instantly find files.", step3_title: "Save file", step3_desc: "Choose format and save.", hist_title: "History", hist_subtitle: "Logs are local.", btn_clear: "Clear Log", about_main_title: "Built for Freedom", about_p1: "AURA was founded in 2026 by Nygma. Originally a Flet desktop app, it evolved into a powerful web service.", about_p2: "Our 'Aurum Obsidian' architecture combines performance with elite design.", feat_sec_title: "Privacy", feat_sec_desc: "History is in browser memory only.", feat_sec_title_2: "Direct Stream", feat_sec_desc_2: "Direct file proxying via our servers.", sup_title: "Support", sup_subtitle: "FAQ & Contact.", faq_1_q: "What quality?", faq_1_a: "Best possible quality automatically.", faq_2_q: "Where are files on iPhone?", faq_2_a: "Check the Files app.", faq_3_q: "Audio only?", faq_3_a: "Select MP3 in formats.", faq_4_q: "What is PRO?", faq_4_a: "PRO unlocks 4K and removes limits.", contact_title: "Ask Nygma", btn_send: "Send", footer_rights: "All rights reserved.", btn_login: "Login", btn_reg: "Register", auth_title: "Authentication", prof_settings: "Account Settings:", prof_avatar: "Choose Avatar", prof_email: "Link Email", prof_save: "Save", prof_logout: "Logout", prof_format: "Select format & quality:", pro_title: "AURA PRO", pro_desc: "Expand your capabilities to the maximum.", pro_f1: "✓ Download in 4K ULTRA HD", pro_f2: "✓ Unlimited downloads (over 10/day)", pro_f3: "✓ Priority dedicated servers (Speed)", pro_f4: "✓ Exclusive PRO profile badge", pro_btn: "Get Subscription", ad_sponsor: "Sponsor" },
    uk: { nav_terminal: "Термінал", nav_history: "Історія", nav_about: "Про нас", nav_support: "Підтримка", term_title: "Універсальний завантажувач", term_subtitle: "Витягуйте медіафайли з будь-якої соцмережі.", btn_analyze: "Аналіз посилання", status_connecting: "Підключення...", btn_download: "Завантажити", steps_title: "Як це працює?", step1_title: "Скопіюйте посилання", step1_desc: "Знайдіть відео і скопіюйте посилання.", step2_title: "Вставте в AURA", step2_desc: "Алгоритми знайдуть приховані файли.", step3_title: "Збережіть файл", step3_desc: "Виберіть формат і збережіть.", hist_title: "Історія", hist_subtitle: "Логи зберігаються локально.", btn_clear: "Очистити лог", about_main_title: "Створено для свободи", about_p1: "Платформа AURA заснована в 2026 році Nygma.", about_p2: "Наша архітектура об'єднує продуктивність з елітарним дизайном.", feat_sec_title: "Абсолютна приватність", feat_sec_desc: "Ваша історія існує тільки в браузері.", feat_sec_title_2: "Direct Stream", feat_sec_desc_2: "Пряме проксіювання через сервери.", sup_title: "Підтримка", sup_subtitle: "FAQ та зв'язок.", faq_1_q: "Яку якість я отримаю?", faq_1_a: "AURA вибирає найкращу якість.", faq_2_q: "Де файли на iPhone?", faq_2_a: "Шукайте в додатку 'Файли'.", faq_3_q: "Тільки аудіо?", faq_3_a: "Виберіть MP3 в меню.", faq_4_q: "Що дає PRO?", faq_4_a: "PRO відкриває 4K та знімає ліміти.", contact_title: "Задати питання", btn_send: "Відправити", footer_rights: "Всі права захищені.", btn_login: "Увійти", btn_reg: "Реєстрація", auth_title: "Вхід до системи", prof_settings: "Налаштування акаунту:", prof_avatar: "Оберіть Аватар", prof_email: "Прив'язати Email", prof_save: "Зберегти", prof_logout: "Вийти з акаунту", prof_format: "Оберіть формат і якість:", pro_title: "AURA PRO", pro_desc: "Розширте свої можливості до максимуму.", pro_f1: "✓ Завантаження у якості 4K ULTRA HD", pro_f2: "✓ Безлімітне завантаження (понад 10 разів/день)", pro_f3: "✓ Пріоритетні виділені сервери (Швидкість)", pro_f4: "✓ Ексклюзивний PRO-бейдж", pro_btn: "Оформити підписку", ad_sponsor: "Спонсор" }
};

let currentLang = 'ru';
let currentUser = localStorage.getItem('aura_user') ? JSON.parse(localStorage.getItem('aura_user')) : null;
const avatars = { '1':'👤', '2':'🤖', '3':'🥷', '4':'👑', '5':'👽', '6':'🐉', '7':'🐯', '8':'💎', '9':'🦁', '10':'🦊', '11':'🐺', '12':'🦅', '13':'🦇', '14':'🦉' };

function escapeHTML(str) { return str ? str.replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)) : ''; }

// Исправлена загрузка рекламы, чтобы не моргало
async function loadAdBanner() {
    try {
        const res = await fetch('/api/ad');
        const ad = await res.json();
        const container = document.getElementById('adBannerContainer');
        if (ad.enabled) {
            container.style.display = 'block';
            document.getElementById('adBannerImage').src = ad.imageUrl;
            document.getElementById('adBannerLink').href = ad.linkUrl;
            document.getElementById('adBannerText').textContent = ad.text;
        } else { 
            container.style.display = 'none'; 
        }
    } catch(e) { console.error(e); }
}

async function pingServer() {
    if (currentUser) {
        try {
            const res = await fetch(`/api/user/${currentUser.username}`);
            const data = await res.json();
            if (data.success && (currentUser.role !== data.role || currentUser.avatar !== data.avatar)) {
                currentUser.role = data.role; currentUser.avatar = data.avatar;
                localStorage.setItem('aura_user', JSON.stringify(currentUser));
                updateUI();
            }
        } catch (e) {}
    }
    const data = { username: currentUser ? currentUser.username : null, role: currentUser ? currentUser.role : 'visitor' };
    fetch('/api/ping', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).catch(() => {});
}
setInterval(pingServer, 5000);
pingServer();

const btnOpenLogin = document.getElementById('btnOpenLogin');
const btnOpenReg = document.getElementById('btnOpenReg');
const userProfileBtn = document.getElementById('userProfileBtn');

function getRoleBadge(role) {
    if (role === 'admin') return '<span class="role-badge badge-admin">Админ</span>';
    if (role === 'pro') return '<span class="role-badge badge-pro">PRO</span>';
    if (role === 'user') return '<span class="role-badge badge-user">User</span>';
    return '<span class="role-badge badge-visitor">Visitor</span>';
}

function updateUI() {
    if (currentUser) {
        btnOpenLogin.style.display = 'none'; btnOpenReg.style.display = 'none'; userProfileBtn.style.display = 'flex';
        document.getElementById('headerUsername').textContent = currentUser.username;
        document.getElementById('headerAvatar').textContent = avatars[currentUser.avatar] || '👤';
        if (document.getElementById('profileRoleBadge')) {
            document.getElementById('profileRoleBadge').innerHTML = getRoleBadge(currentUser.role);
            document.getElementById('profileAvatarBig').textContent = avatars[currentUser.avatar] || '👤';
        }
    } else {
        btnOpenLogin.style.display = 'block'; btnOpenReg.style.display = 'block'; userProfileBtn.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateUI();
    loadAdBanner(); 

    const langBtns = document.querySelectorAll('.lang-btn');
    function setLanguage(lang) {
        currentLang = lang; const dict = translations[lang];
        document.querySelectorAll('[data-i18n]').forEach(el => { const key = el.getAttribute('data-i18n'); if (dict[key]) el.textContent = dict[key]; });
        langBtns.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-lang') === lang));
        renderHistory(); 
    }
    langBtns.forEach(btn => btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang'))));

    document.getElementById('logoBtn').addEventListener('click', () => document.querySelector('[data-tab="tab-terminal"]').click());

    const authModal = document.getElementById('authModalWindow');
    let isLoginMode = true;
    btnOpenLogin.addEventListener('click', () => { isLoginMode = true; switchAuthTab(); authModal.classList.add('active'); });
    btnOpenReg.addEventListener('click', () => { isLoginMode = false; switchAuthTab(); authModal.classList.add('active'); });
    document.getElementById('closeAuth').addEventListener('click', () => authModal.classList.remove('active'));

    function switchAuthTab() {
        document.getElementById('tabLogin').classList.toggle('active', isLoginMode);
        document.getElementById('tabReg').classList.toggle('active', !isLoginMode);
        document.getElementById('authTitle').setAttribute('data-i18n', isLoginMode ? 'auth_title' : 'btn_reg');
        document.getElementById('btnSubmitAuth').setAttribute('data-i18n', isLoginMode ? 'btn_login' : 'btn_reg');
        setLanguage(currentLang);
        document.getElementById('authError').textContent = "";
    }
    document.getElementById('tabLogin').addEventListener('click', () => { isLoginMode = true; switchAuthTab(); });
    document.getElementById('tabReg').addEventListener('click', () => { isLoginMode = false; switchAuthTab(); });

    document.getElementById('btnSubmitAuth').addEventListener('click', async () => {
        const u = document.getElementById('authLogin').value.trim(); const p = document.getElementById('authPass').value;
        if (!u || !p) { document.getElementById('authError').textContent = "Empty fields!"; return; }
        try {
            const res = await fetch(isLoginMode ? '/api/login' : '/api/register', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({username: u, password: p}) });
            const data = await res.json();
            if (data.success) {
                currentUser = { username: data.username, role: data.role, avatar: data.avatar || '1', email: data.email || '' };
                localStorage.setItem('aura_user', JSON.stringify(currentUser));
                authModal.classList.remove('active'); document.getElementById('authLogin').value = ''; document.getElementById('authPass').value = '';
                updateUI(); pingServer();
            } else { document.getElementById('authError').textContent = data.error; }
        } catch (e) { document.getElementById('authError').textContent = "Server Error"; }
    });

    const profileModal = document.getElementById('profileModalWindow');
    userProfileBtn.addEventListener('click', () => {
        document.getElementById('profileName').textContent = currentUser.username;
        document.getElementById('profileRoleBadge').innerHTML = getRoleBadge(currentUser.role);
        document.getElementById('profileAvatarBig').textContent = avatars[currentUser.avatar] || '👤';
        document.getElementById('profileEmail').value = currentUser.email || '';
        document.getElementById('emailSaveStatus').style.display = 'none';
        document.querySelectorAll('.avatar-option').forEach(el => el.classList.toggle('active', el.getAttribute('data-av') === currentUser.avatar));
        profileModal.classList.add('active');
    });
    document.getElementById('closeProfile').addEventListener('click', () => profileModal.classList.remove('active'));

    document.querySelectorAll('.avatar-option').forEach(opt => {
        opt.addEventListener('click', async () => {
            const newAv = opt.getAttribute('data-av');
            currentUser.avatar = newAv; localStorage.setItem('aura_user', JSON.stringify(currentUser));
            updateUI(); document.querySelectorAll('.avatar-option').forEach(el => el.classList.remove('active')); opt.classList.add('active');
            fetch('/api/update-avatar', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({username: currentUser.username, avatar: newAv}) });
        });
    });

    document.getElementById('btnSaveEmail').addEventListener('click', async () => {
        const email = document.getElementById('profileEmail').value.trim();
        currentUser.email = email; localStorage.setItem('aura_user', JSON.stringify(currentUser));
        await fetch('/api/update-email', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({username: currentUser.username, email: email}) });
        document.getElementById('emailSaveStatus').style.display = 'block'; setTimeout(() => document.getElementById('emailSaveStatus').style.display = 'none', 2000);
    });

    document.getElementById('btnLogout').addEventListener('click', () => {
        currentUser = null; localStorage.removeItem('aura_user'); profileModal.classList.remove('active'); updateUI();
        document.querySelector('[data-tab="tab-terminal"]').click();
    });

    document.getElementById('btnTestBuy').addEventListener('click', () => alert("Модуль оплаты находится в разработке."));

    // ВХОД В АДМИНКУ (пароль Maksimus01)
    let badgeClicks = 0;
    document.getElementById('nygmaBadge').addEventListener('click', () => {
        badgeClicks++;
        if (badgeClicks >= 5) {
            const pass = prompt("SYS_CORE: Enter Password");
            if (pass) {
                fetch('/api/admin/login', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ key: pass }) })
                .then(r => r.json())
                .then(data => {
                    if (data.success) {
                        currentUser = { username: 'nygma', role: 'admin', avatar: '4', email: 'admin@nygma.core' };
                        localStorage.setItem('aura_user', JSON.stringify(currentUser));
                        window.location.href = '/admin.html';
                    } else alert("ACCESS DENIED");
                });
            }
            badgeClicks = 0; 
        }
        setTimeout(() => { badgeClicks = 0; }, 2000);
    });

    document.querySelectorAll('.faq-item').forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    const navItems = document.querySelectorAll('.nav-item');
    const tabs = document.querySelectorAll('.tab-pane');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-tab');
            navItems.forEach(n => n.classList.remove('active')); tabs.forEach(t => t.classList.remove('active'));
            item.classList.add('active'); document.getElementById(targetId).classList.add('active');
            if(targetId === 'tab-history') renderHistory();
            window.scrollTo({top: 0, behavior: 'smooth'}); 
        });
    });

    const inputUrl = document.getElementById('mediaUrl'); const btnAnalyze = document.getElementById('btnAnalyze'); const actionPanel = document.getElementById('actionPanel'); const btnDownload = document.getElementById('btnDownload'); const qualitySelect = document.getElementById('qualitySelect');

    btnAnalyze.addEventListener('click', () => {
        if (!inputUrl.value.trim()) return; btnAnalyze.textContent = "Анализ...";
        setTimeout(() => { btnAnalyze.textContent = "Анализ ссылки"; actionPanel.classList.add('show'); }, 600);
    });

    btnDownload.addEventListener('click', async () => {
        const q = qualitySelect.value;
        if (q === '1080p' || q === '4k') { alert(`⚠️ Формат ${q.toUpperCase()} находится в разработке.\nДля доступа потребуется подписка AURA PRO.`); return; }
        const targetUrl = inputUrl.value.trim(); if (!targetUrl) return;
        btnDownload.style.display = 'none'; document.getElementById('progressBox').style.display = 'block'; document.getElementById('progressBar').style.width = '20%'; document.getElementById('progressStatus').textContent = "Поиск медиа...";
        try {
            const response = await fetch('/api/download-info', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ url: targetUrl }) });
            const data = await response.json(); document.getElementById('progressBar').style.width = '60%';
            if (data && data.medias && data.medias.length > 0) {
                let downloadLink = data.medias[0].url; let isAudioDownload = false;
                if (q === 'mp3') {
                    const audioMedia = data.medias.find(m => m.type === 'audio' || m.extension === 'mp3' || m.quality === 'audio');
                    if (audioMedia) { downloadLink = audioMedia.url; isAudioDownload = true; } 
                    else { alert("К сожалению, чистая аудио-дорожка не найдена для этого файла."); btnDownload.style.display = 'block'; document.getElementById('progressBox').style.display = 'none'; return; }
                }
                document.getElementById('progressBar').style.width = '100%'; document.getElementById('progressStatus').textContent = "Скачивание...";
                saveHistory(targetUrl, q === 'mp3' ? "🎵 AUDIO (MP3)" : `📺 MP4 - ${q.toUpperCase()}`);
                const streamUrl = `/api/stream?url=${encodeURIComponent(downloadLink)}${isAudioDownload ? '&type=audio' : ''}`;
                const a = document.createElement('a'); a.href = streamUrl; document.body.appendChild(a); a.click(); document.body.removeChild(a);
                setTimeout(() => { actionPanel.classList.remove('show'); inputUrl.value = ''; btnDownload.style.display = 'block'; document.getElementById('progressBox').style.display = 'none'; }, 3000);
            } else { throw new Error("Файлы не найдены"); }
        } catch (error) {
            document.getElementById('progressStatus').textContent = "Ошибка API!"; document.getElementById('progressBar').style.background = "var(--danger)"; 
            setTimeout(() => { btnDownload.style.display = 'block'; document.getElementById('progressBox').style.display = 'none'; document.getElementById('progressBar').style.background = ""; }, 3000);
        }
    });

    function saveHistory(url, format) {
        const history = JSON.parse(localStorage.getItem('aura_v2_hist')) || [];
        history.unshift({ url: escapeHTML(url.length > 45 ? url.substring(0, 45) + '...' : url), format, date: new Date().toLocaleDateString() });
        if(history.length > 50) history.pop(); localStorage.setItem('aura_v2_hist', JSON.stringify(history));
    }
    function renderHistory() {
        const c = document.getElementById('historyList'); const h = JSON.parse(localStorage.getItem('aura_v2_hist')) || [];
        c.innerHTML = h.length === 0 ? `<p style="text-align:center; color:#888; margin-top: 30px;">Пусто</p>` : '';
        h.forEach(i => c.innerHTML += `<div class="history-item reveal-up visible"><div><div class="history-url">${i.url}</div><div class="history-meta">${i.format} • ${i.date}</div></div><div class="history-status">OK</div></div>`);
    }
    document.getElementById('btnClear').addEventListener('click', () => { localStorage.removeItem('aura_v2_hist'); renderHistory(); });
    document.querySelectorAll('.reveal-up').forEach(el => new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }); }, { root: null, threshold: 0.15 }).observe(el));
});
