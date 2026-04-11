/**
 * AURA 2.5 Aurum Edition by Nygma - Full Fix & Features
 */

let currentUser = localStorage.getItem('aura_user') ? JSON.parse(localStorage.getItem('aura_user')) : null;
const avatars = { '1': '👤', '2': '🤖', '3': '🥷', '4': '👑' };

function pingServer() {
    const data = { username: currentUser ? currentUser.username : null, role: currentUser ? currentUser.role : 'visitor' };
    fetch('/api/ping', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).catch(() => {});
}
setInterval(pingServer, 10000);
pingServer();

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));
}

document.addEventListener('DOMContentLoaded', () => {

    // --- КЛИК ПО ЛОГОТИПУ ---
    document.getElementById('logoBtn').addEventListener('click', () => {
        document.querySelector('[data-tab="tab-terminal"]').click();
    });

    // --- АВТОРИЗАЦИЯ, UI И ПРОФИЛЬ ---
    const btnOpenLogin = document.getElementById('btnOpenLogin');
    const btnOpenReg = document.getElementById('btnOpenReg');
    const userProfileBtn = document.getElementById('userProfileBtn');
    const authModal = document.getElementById('authModalWindow');
    const profileModal = document.getElementById('profileModalWindow');
    const btnAdminNav = document.getElementById('btnAdminNav');
    
    let isLoginMode = true;

    function getRoleBadge(role) {
        if (role === 'admin') return '<span class="role-badge badge-admin">Админ (Nygma)</span>';
        if (role === 'pro') return '<span class="role-badge badge-pro">PRO Подписка</span>';
        if (role === 'user') return '<span class="role-badge badge-user">Пользователь</span>';
        return '<span class="role-badge badge-visitor">Посетитель</span>';
    }

    function updateUI() {
        if (currentUser) {
            btnOpenLogin.style.display = 'none';
            btnOpenReg.style.display = 'none';
            userProfileBtn.style.display = 'flex';
            document.getElementById('headerUsername').textContent = currentUser.username;
            document.getElementById('headerAvatar').textContent = avatars[currentUser.avatar] || '👤';
            
            if (currentUser.role === 'admin') btnAdminNav.classList.remove('hidden-admin-btn');
            else btnAdminNav.classList.add('hidden-admin-btn');
        } else {
            btnOpenLogin.style.display = 'block';
            btnOpenReg.style.display = 'block';
            userProfileBtn.style.display = 'none';
            btnAdminNav.classList.add('hidden-admin-btn');
        }
    }
    updateUI();

    // Открытие модалки авторизации
    btnOpenLogin.addEventListener('click', () => { isLoginMode = true; switchAuthTab(); authModal.classList.add('active'); });
    btnOpenReg.addEventListener('click', () => { isLoginMode = false; switchAuthTab(); authModal.classList.add('active'); });
    document.getElementById('closeAuth').addEventListener('click', () => authModal.classList.remove('active'));

    function switchAuthTab() {
        document.getElementById('tabLogin').classList.toggle('active', isLoginMode);
        document.getElementById('tabReg').classList.toggle('active', !isLoginMode);
        document.getElementById('authTitle').textContent = isLoginMode ? "Вход в систему" : "Регистрация";
        document.getElementById('btnSubmitAuth').textContent = isLoginMode ? "Войти" : "Создать аккаунт";
        document.getElementById('authError').textContent = "";
    }
    document.getElementById('tabLogin').addEventListener('click', () => { isLoginMode = true; switchAuthTab(); });
    document.getElementById('tabReg').addEventListener('click', () => { isLoginMode = false; switchAuthTab(); });

    document.getElementById('btnSubmitAuth').addEventListener('click', async () => {
        const u = document.getElementById('authLogin').value;
        const p = document.getElementById('authPass').value;
        const endpoint = isLoginMode ? '/api/login' : '/api/register';
        try {
            const res = await fetch(endpoint, {
                method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({username: u, password: p})
            });
            const data = await res.json();
            if (data.success) {
                currentUser = { username: data.username, role: data.role, avatar: data.avatar || '1' };
                localStorage.setItem('aura_user', JSON.stringify(currentUser));
                authModal.classList.remove('active');
                updateUI(); pingServer();
            } else {
                document.getElementById('authError').textContent = data.error;
            }
        } catch (e) { document.getElementById('authError').textContent = "Ошибка сервера"; }
    });

    // Открытие модалки профиля
    userProfileBtn.addEventListener('click', () => {
        document.getElementById('profileName').textContent = currentUser.username;
        document.getElementById('profileRoleBadge').innerHTML = getRoleBadge(currentUser.role);
        document.getElementById('profileAvatarBig').textContent = avatars[currentUser.avatar] || '👤';
        
        // Подсветка текущего аватара
        document.querySelectorAll('.avatar-option').forEach(el => {
            el.classList.toggle('active', el.getAttribute('data-av') === currentUser.avatar);
        });
        
        profileModal.classList.add('active');
    });
    document.getElementById('closeProfile').addEventListener('click', () => profileModal.classList.remove('active'));

    // Выбор аватара
    document.querySelectorAll('.avatar-option').forEach(opt => {
        opt.addEventListener('click', async () => {
            const newAv = opt.getAttribute('data-av');
            currentUser.avatar = newAv;
            localStorage.setItem('aura_user', JSON.stringify(currentUser));
            updateUI();
            document.getElementById('profileAvatarBig').textContent = avatars[newAv];
            document.querySelectorAll('.avatar-option').forEach(el => el.classList.remove('active'));
            opt.classList.add('active');

            // Отправляем на сервер
            fetch('/api/update-avatar', {
                method: 'POST', headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username: currentUser.username, avatar: newAv})
            });
        });
    });

    document.getElementById('btnLogout').addEventListener('click', () => {
        currentUser = null;
        localStorage.removeItem('aura_user');
        profileModal.classList.remove('active');
        updateUI();
        document.querySelector('[data-tab="tab-terminal"]').click();
    });

    document.getElementById('btnTestBuy').addEventListener('click', () => {
        alert("Модуль оплаты находится в стадии интеграции.\nОжидайте обновлений!");
    });


    // --- НАВИГАЦИЯ ---
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

    // --- ТЕРМИНАЛ И ПРАВИЛЬНЫЙ MP3 ---
    const inputUrl = document.getElementById('mediaUrl');
    const btnAnalyze = document.getElementById('btnAnalyze');
    const actionPanel = document.getElementById('actionPanel');
    const btnDownload = document.getElementById('btnDownload');
    const progressBox = document.getElementById('progressBox');
    const progressBar = document.getElementById('progressBar');
    const progressStatus = document.getElementById('progressStatus');
    const qualitySelect = document.getElementById('qualitySelect');

    btnAnalyze.addEventListener('click', () => {
        if (!inputUrl.value.trim()) return;
        btnAnalyze.textContent = "Анализ...";
        setTimeout(() => { btnAnalyze.textContent = "Анализ"; actionPanel.classList.add('show'); }, 600);
    });

    btnDownload.addEventListener('click', async () => {
        const q = qualitySelect.value;
        if (q === '1080p' || q === '4k') {
            alert(`⚠️ Формат ${q.toUpperCase()} находится в разработке.\nДля доступа потребуется подписка AURA PRO.`);
            return;
        }

        const targetUrl = inputUrl.value.trim();
        if (!targetUrl) return;

        btnDownload.style.display = 'none';
        progressBox.style.display = 'block';
        progressBar.style.width = '20%';
        progressStatus.textContent = "Поиск медиа...";

        try {
            const response = await fetch('/api/download-info', {
                method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ url: targetUrl })
            });
            const data = await response.json();
            progressBar.style.width = '60%';

            if (data && data.medias && data.medias.length > 0) {
                let downloadLink = data.medias[0].url; // Дефолт (обычно видео)
                let isAudioDownload = false;

                // УМНЫЙ ПОИСК MP3
                if (q === 'mp3') {
                    // Ищем в массиве medias объект, который является аудио
                    const audioMedia = data.medias.find(m => m.type === 'audio' || m.extension === 'mp3' || m.quality === 'audio');
                    if (audioMedia) {
                        downloadLink = audioMedia.url;
                        isAudioDownload = true;
                    } else {
                        alert("К сожалению, чистая аудио-дорожка не найдена для этого файла сервером API.");
                        btnDownload.style.display = 'block';
                        progressBox.style.display = 'none';
                        return;
                    }
                }

                progressBar.style.width = '100%';
                progressStatus.textContent = "Скачивание...";
                
                saveHistory(targetUrl, q === 'mp3' ? "🎵 AUDIO (MP3)" : `📺 MP4 - ${q.toUpperCase()}`);
                
                // Передаем параметр type=audio чтобы сервер поставил правильное расширение
                const streamUrl = `/api/stream?url=${encodeURIComponent(downloadLink)}${isAudioDownload ? '&type=audio' : ''}`;
                
                const a = document.createElement('a');
                a.href = streamUrl;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);

                setTimeout(() => {
                    actionPanel.classList.remove('show');
                    inputUrl.value = '';
                    btnDownload.style.display = 'block';
                    progressBox.style.display = 'none';
                }, 3000);

            } else { throw new Error("Файлы не найдены"); }
        } catch (error) {
            progressStatus.textContent = "Ошибка API!";
            progressBar.style.background = "var(--danger)"; 
            setTimeout(() => { btnDownload.style.display = 'block'; progressBox.style.display = 'none'; progressBar.style.background = ""; }, 3000);
        }
    });

    // --- ИСТОРИЯ ---
    function saveHistory(url, format) {
        const history = JSON.parse(localStorage.getItem('aura_v2_hist')) || [];
        history.unshift({ url: escapeHTML(url.length > 45 ? url.substring(0, 45) + '...' : url), format, date: new Date().toLocaleDateString() });
        if(history.length > 50) history.pop();
        localStorage.setItem('aura_v2_hist', JSON.stringify(history));
    }
    function renderHistory() {
        const c = document.getElementById('historyList');
        const h = JSON.parse(localStorage.getItem('aura_v2_hist')) || [];
        c.innerHTML = h.length === 0 ? `<p style="text-align:center; color:#888; margin-top: 30px;">Пусто</p>` : '';
        h.forEach(i => c.innerHTML += `<div class="history-item reveal-up visible"><div><div class="history-url">${i.url}</div><div class="history-meta">${i.format} • ${i.date}</div></div><div class="history-status">OK</div></div>`);
    }
    document.getElementById('btnClear').addEventListener('click', () => { localStorage.removeItem('aura_v2_hist'); renderHistory(); });

    // --- СЕКРЕТНЫЙ ВХОД АДМИНА ---
    let badgeClicks = 0;
    document.getElementById('nygmaBadge').addEventListener('click', () => {
        badgeClicks++;
        if (badgeClicks >= 5) {
            if (prompt("SYS_CORE: Key?") === "nygma") {
                currentUser = { username: 'nygma', role: 'admin', avatar: '4' };
                localStorage.setItem('aura_user', JSON.stringify(currentUser));
                updateUI(); btnAdminNav.click(); 
            }
            badgeClicks = 0; 
        }
        setTimeout(() => { badgeClicks = 0; }, 2000);
    });

    // --- АДМИНКА ---
    async function updateAdminStats() {
        if (!currentUser || currentUser.role !== 'admin') return;
        fetch('https://api.ipify.org?format=json').then(r => r.json()).then(d => document.getElementById('adminIP').textContent = d.ip).catch(()=>{});
        try {
            const res = await fetch('/api/stats');
            const data = await res.json();
            document.getElementById('adminOnlineCount').textContent = data.online;
            const tbody = document.getElementById('adminUsersTable');
            tbody.innerHTML = data.sessions.length === 0 ? '<tr><td colspan="4" style="text-align:center;">Пусто</td></tr>' : '';
            data.sessions.forEach(s => {
                const uName = s.username ? `<b>${escapeHTML(s.username)}</b>` : '<span style="color:#666;">Без регистрации</span>';
                tbody.innerHTML += `<tr><td style="color:var(--accent-1);">${s.ip}</td><td>${uName}</td><td>${getRoleBadge(s.role)}</td><td style="text-align:center; font-weight:bold;">${s.downloads}</td></tr>`;
            });
        } catch (e) {}
    }
    setInterval(() => { if (document.getElementById('tab-admin').classList.contains('active')) updateAdminStats(); }, 5000);

    // Анимации сетки
    const revealElements = document.querySelectorAll('.reveal-up');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { root: null, threshold: 0.15 });
    revealElements.forEach(el => revealObserver.observe(el));
});
