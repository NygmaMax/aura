/**
 * AURA 2.5 Aurum Edition by Nygma - Auth & Admin Panel Update
 */

let currentUser = localStorage.getItem('aura_user') ? JSON.parse(localStorage.getItem('aura_user')) : null;

// Пинг сервера для онлайна + передаем свои данные
function pingServer() {
    const data = {
        username: currentUser ? currentUser.username : null,
        role: currentUser ? currentUser.role : 'visitor'
    };
    fetch('/api/ping', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).catch(() => {});
}
setInterval(pingServer, 10000);
pingServer();

document.addEventListener('DOMContentLoaded', () => {

    // --- АВТОРИЗАЦИЯ И UI ---
    const btnAuth = document.getElementById('btnAuth');
    const userProfile = document.getElementById('userProfile');
    const authModal = document.getElementById('authModalWindow');
    
    function updateAuthUI() {
        if (currentUser) {
            btnAuth.style.display = 'none';
            userProfile.style.display = 'block';
            userProfile.textContent = `[ ${currentUser.username.toUpperCase()} ]`;
            if (currentUser.role === 'admin') document.getElementById('btnAdminNav').classList.remove('hidden-admin-btn');
        } else {
            btnAuth.style.display = 'block';
            userProfile.style.display = 'none';
        }
    }
    updateAuthUI();

    btnAuth.addEventListener('click', () => authModal.classList.add('active'));
    document.getElementById('closeAuth').addEventListener('click', () => authModal.classList.remove('active'));

    document.getElementById('btnDoLogin').addEventListener('click', async () => {
        const u = document.getElementById('authLogin').value;
        const p = document.getElementById('authPass').value;
        try {
            const res = await fetch('/api/login', {
                method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({username: u, password: p})
            });
            const data = await res.json();
            if (data.success) {
                currentUser = { username: data.username, role: data.role };
                localStorage.setItem('aura_user', JSON.stringify(currentUser));
                authModal.classList.remove('active');
                updateAuthUI();
                pingServer();
            } else {
                document.getElementById('authError').textContent = data.error;
            }
        } catch (e) { document.getElementById('authError').textContent = "Ошибка сети"; }
    });

    document.getElementById('btnDoRegister').addEventListener('click', async () => {
        const u = document.getElementById('authLogin').value;
        const p = document.getElementById('authPass').value;
        try {
            const res = await fetch('/api/register', {
                method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({username: u, password: p})
            });
            const data = await res.json();
            if (data.success) {
                currentUser = { username: data.username, role: data.role };
                localStorage.setItem('aura_user', JSON.stringify(currentUser));
                authModal.classList.remove('active');
                updateAuthUI();
                pingServer();
            } else {
                document.getElementById('authError').textContent = data.error;
            }
        } catch (e) { document.getElementById('authError').textContent = "Ошибка сети"; }
    });

    // Навигация
    const navItems = document.querySelectorAll('.nav-item');
    const tabs = document.querySelectorAll('.tab-pane');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-tab');
            navItems.forEach(n => n.classList.remove('active'));
            tabs.forEach(t => t.classList.remove('active'));
            item.classList.add('active');
            document.getElementById(targetId).classList.add('active');
            if(targetId === 'tab-admin') updateAdminStats();
        });
    });

    // ТЕРМИНАЛ И ВЫБОР КАЧЕСТВА
    const btnAnalyze = document.getElementById('btnAnalyze');
    const actionPanel = document.getElementById('actionPanel');
    const btnDownload = document.getElementById('btnDownload');
    const qualitySelect = document.getElementById('qualitySelect');

    btnAnalyze.addEventListener('click', () => {
        if (!document.getElementById('mediaUrl').value.trim()) return;
        btnAnalyze.textContent = "Анализ...";
        setTimeout(() => {
            btnAnalyze.textContent = "Анализ";
            actionPanel.classList.add('show');
        }, 600);
    });

    // ПЕРЕХВАТ НАЖАТИЯ ЕСЛИ ВЫБРАНО 1080p ИЛИ 4K
    btnDownload.addEventListener('click', async () => {
        const q = qualitySelect.value;
        
        if (q === '1080p' || q === '4k') {
            alert(`⚠️ Формат ${q.toUpperCase()} находится в разработке.\n\nСкоро здесь появится система подписок AURA PRO для неограниченного скачивания в ультра-качестве!`);
            return; // Прерываем скачивание
        }

        const targetUrl = document.getElementById('mediaUrl').value.trim();
        if (!targetUrl) return;

        btnDownload.style.display = 'none';
        document.getElementById('progressBox').style.display = 'block';

        try {
            const response = await fetch('/api/download-info', {
                method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ url: targetUrl })
            });
            const data = await response.json();

            if (data && data.medias && data.medias.length > 0) {
                const downloadLink = data.medias[0].url; // В идеале API должно вернуть линк именно под выбранное качество, пока берем дефолт
                
                const a = document.createElement('a');
                a.href = `/api/stream?url=${encodeURIComponent(downloadLink)}`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);

                setTimeout(() => {
                    actionPanel.classList.remove('show');
                    btnDownload.style.display = 'block';
                    document.getElementById('progressBox').style.display = 'none';
                }, 3000);
            }
        } catch (error) {
            alert("Ошибка API");
            btnDownload.style.display = 'block';
            document.getElementById('progressBox').style.display = 'none';
        }
    });

    // СЕКРЕТНЫЙ ВХОД ДЛЯ АДМИНА (Резервный)
    let badgeClicks = 0;
    document.getElementById('nygmaBadge').addEventListener('click', () => {
        badgeClicks++;
        if (badgeClicks >= 5) {
            const password = prompt("SYS_CORE: Enter Access Key");
            if (password === "nygma") {
                currentUser = { username: 'nygma', role: 'admin' };
                localStorage.setItem('aura_user', JSON.stringify(currentUser));
                updateAuthUI();
                document.getElementById('btnAdminNav').click(); 
            }
            badgeClicks = 0; 
        }
        setTimeout(() => { badgeClicks = 0; }, 2000);
    });

    // АДМИНКА - ПОЛНАЯ ТАБЛИЦА
    function getRoleBadge(role) {
        if (role === 'admin') return '<span class="role-badge badge-admin">Админ (Nygma)</span>';
        if (role === 'pro') return '<span class="role-badge badge-pro">PRO Подписка</span>';
        if (role === 'user') return '<span class="role-badge badge-user">Пользователь</span>';
        return '<span class="role-badge badge-visitor">Посетитель</span>';
    }

    async function updateAdminStats() {
        if (!currentUser || currentUser.role !== 'admin') return;

        fetch('https://api.ipify.org?format=json').then(res => res.json())
            .then(data => document.getElementById('adminIP').textContent = data.ip);

        try {
            const statsRes = await fetch('/api/stats');
            const statsData = await statsRes.json();
            
            document.getElementById('adminOnlineCount').textContent = statsData.online;
            
            const tbody = document.getElementById('adminUsersTable');
            tbody.innerHTML = '';
            
            if (statsData.sessions.length === 0) {
                tbody.innerHTML = '<tr><td colspan="4" style="text-align:center; color:#888;">Нет активных сессий</td></tr>';
            } else {
                statsData.sessions.forEach(s => {
                    const userName = s.username ? `<b>${s.username}</b>` : '<span style="color:#666;">Без регистрации</span>';
                    tbody.innerHTML += `
                        <tr>
                            <td style="font-family:monospace; color:var(--accent-1);">${s.ip}</td>
                            <td>${userName}</td>
                            <td>${getRoleBadge(s.role)}</td>
                            <td style="text-align:center; font-weight:bold;">${s.downloads}</td>
                        </tr>
                    `;
                });
            }
        } catch (e) {}
    }

    setInterval(() => {
        if (document.getElementById('tab-admin').classList.contains('active')) updateAdminStats();
    }, 5000);
});
