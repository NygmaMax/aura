/**
 * AURA 2.5 - Admin Panel Core + Ads
 */

const adminTranslations = {
    ru: { admin_back: "НА САЙТ", admin_nav_dash: "Дашборд (Live)", admin_nav_users: "Пользователи", admin_nav_ads: "Реклама", admin_nav_msgs: "Сообщения", admin_title_main: "Глобальная панель управления сервером", admin_stat_online: "АКТИВНЫЙ ОНЛАЙН", admin_stat_ip: "ТВОЙ IP АДРЕС", admin_dash_live: "Мониторинг онлайна (Live сессии)", admin_th_user: "Пользователь", admin_th_role: "Статус / Роль", admin_th_dl: "Скачиваний", admin_users_title: "База зарегистрированных пользователей", admin_th_nick: "Никнейм", admin_th_crole: "Текущая Роль", admin_th_action: "Изменить Роль", admin_ad_title: "Управление рекламным баннером", admin_ad_desc: "Настройте блок, который будет виден на главной странице терминала.", admin_ad_img: "URL Картинки (Логотип спонсора)", admin_ad_link: "Ссылка (Куда ведет клик)", admin_ad_text: "Текст рекламы", prof_save: "Сохранить изменения", admin_msg_title: "Входящие сообщения (Форма связи)", admin_btn_clear: "Очистить сообщения" },
    en: { admin_back: "TO SITE", admin_nav_dash: "Dashboard (Live)", admin_nav_users: "Users", admin_nav_ads: "Ads", admin_nav_msgs: "Messages", admin_title_main: "Global Server Control Panel", admin_stat_online: "ACTIVE ONLINE", admin_stat_ip: "YOUR IP ADDRESS", admin_dash_live: "Live Session Monitoring", admin_th_user: "User", admin_th_role: "Status / Role", admin_th_dl: "Downloads", admin_users_title: "Registered Users Database", admin_th_nick: "Nickname", admin_th_crole: "Current Role", admin_th_action: "Change Role", admin_ad_title: "Ad Banner Management", admin_ad_desc: "Configure the block visible on the main terminal page.", admin_ad_img: "Image URL (Sponsor Logo)", admin_ad_link: "Link URL", admin_ad_text: "Ad Text", prof_save: "Save Changes", admin_msg_title: "Incoming Messages (Contact Form)", admin_btn_clear: "Clear Messages" },
    uk: { admin_back: "НА САЙТ", admin_nav_dash: "Дашборд (Live)", admin_nav_users: "Користувачі", admin_nav_ads: "Реклама", admin_nav_msgs: "Повідомлення", admin_title_main: "Глобальна панель управління сервером", admin_stat_online: "АКТИВНИЙ ОНЛАЙН", admin_stat_ip: "ТВІЙ IP АДРЕС", admin_dash_live: "Моніторинг онлайну (Live сесії)", admin_th_user: "Користувач", admin_th_role: "Статус / Роль", admin_th_dl: "Завантажень", admin_users_title: "База зареєстрованих користувачів", admin_th_nick: "Нікнейм", admin_th_crole: "Поточна Роль", admin_th_action: "Змінити Роль", admin_ad_title: "Управління рекламним банером", admin_ad_desc: "Налаштуйте блок, який буде видно на головній сторінці терміналу.", admin_ad_img: "URL Зображення", admin_ad_link: "Посилання", admin_ad_text: "Текст реклами", prof_save: "Зберегти зміни", admin_msg_title: "Вхідні повідомлення", admin_btn_clear: "Очистити повідомлення" }
};

let currentUser = localStorage.getItem('aura_user') ? JSON.parse(localStorage.getItem('aura_user')) : null;
if (!currentUser || currentUser.role !== 'admin') window.location.href = '/';

function escapeHTML(str) { return str ? str.replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)) : ''; }

function getRoleBadge(role) {
    if (role === 'admin') return '<span class="role-badge badge-admin">Админ</span>';
    if (role === 'pro') return '<span class="role-badge badge-pro">PRO</span>';
    if (role === 'user') return '<span class="role-badge badge-user">Юзер</span>';
    return '<span class="role-badge badge-visitor">Гость</span>';
}

document.addEventListener('DOMContentLoaded', () => {

    // --- Переводы ---
    const langBtns = document.querySelectorAll('.lang-btn');
    function setLanguage(lang) {
        const dict = adminTranslations[lang];
        document.querySelectorAll('[data-i18n]').forEach(el => { const key = el.getAttribute('data-i18n'); if (dict[key]) el.textContent = dict[key]; });
        langBtns.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-lang') === lang));
    }
    langBtns.forEach(btn => btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang'))));
    setLanguage('ru');

    // --- Навигация ---
    const navItems = document.querySelectorAll('.nav-item');
    const tabs = document.querySelectorAll('.tab-pane');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-tab');
            navItems.forEach(n => n.classList.remove('active')); tabs.forEach(t => t.classList.remove('active'));
            item.classList.add('active'); document.getElementById(targetId).classList.add('active');
        });
    });

    // --- Дашборд ---
    async function updateAdminStats() {
        fetch('https://api.ipify.org?format=json').then(r => r.json()).then(d => document.getElementById('adminIP').textContent = d.ip).catch(()=>{});
        try {
            const res = await fetch('/api/stats'); const data = await res.json();
            document.getElementById('adminOnlineCount').textContent = data.online;
            const tbody = document.getElementById('adminUsersTable');
            tbody.innerHTML = data.sessions.length === 0 ? '<tr><td colspan="4" style="text-align:center; color:#888;">Пусто</td></tr>' : '';
            data.sessions.forEach(s => {
                const uName = s.username ? `<b>${escapeHTML(s.username)}</b>` : '<span style="color:#666;">Без регистрации</span>';
                tbody.innerHTML += `<tr><td style="color:var(--accent-1); font-family:monospace;">${s.ip}</td><td>${uName}</td><td>${getRoleBadge(s.role)}</td><td style="text-align:center; font-weight:bold;">${s.downloads}</td></tr>`;
            });

            const msgsRes = await fetch('/api/messages'); const msgs = await msgsRes.json();
            const msgContainer = document.getElementById('adminMessagesBox');
            msgContainer.innerHTML = msgs.length === 0 ? '<div style="color:#888; font-size:14px;">Входящих сообщений нет.</div>' : '';
            msgs.forEach(m => { msgContainer.innerHTML += `<div style="border-bottom: 1px solid rgba(255,255,255,0.05); padding: 15px 0;"><div style="color: var(--accent-1); font-size: 12px; margin-bottom: 8px;">${m.date} | От: ${escapeHTML(m.email)}</div><div style="color: var(--text-main); font-size: 15px;">${escapeHTML(m.text)}</div></div>`; });
        } catch (e) {}
    }

    // --- Пользователи ---
    async function loadAdminUsersTable() {
        try {
            const res = await fetch('/api/admin/users'); const usersList = await res.json();
            const tbody = document.getElementById('adminAllUsersTable'); tbody.innerHTML = '';
            usersList.forEach(u => {
                const tr = document.createElement('tr');
                tr.innerHTML = `<td style="font-weight:bold;">${escapeHTML(u.username)}</td><td style="color: var(--text-muted);">${escapeHTML(u.email) || '—'}</td><td>${getRoleBadge(u.role)}</td>
                    <td><select class="admin-role-select profile-input" style="padding: 8px;" data-user="${escapeHTML(u.username)}">
                        <option value="user" ${u.role === 'user' ? 'selected' : ''}>Пользователь</option>
                        <option value="pro" ${u.role === 'pro' ? 'selected' : ''}>PRO</option>
                        <option value="admin" ${u.role === 'admin' ? 'selected' : ''}>Админ</option>
                    </select></td>`;
                tbody.appendChild(tr);
            });
            document.querySelectorAll('.admin-role-select').forEach(sel => {
                sel.addEventListener('change', async (e) => {
                    await fetch('/api/admin/update-role', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({username: e.target.getAttribute('data-user'), role: e.target.value}) });
                    loadAdminUsersTable();
                });
            });
        } catch(e) {}
    }

    // --- Реклама ---
    async function loadAdSettings() {
        try {
            const res = await fetch('/api/ad'); const ad = await res.json();
            document.getElementById('adToggle').checked = ad.enabled;
            document.getElementById('adminAdImage').value = ad.imageUrl;
            document.getElementById('adminAdLink').value = ad.linkUrl;
            document.getElementById('adminAdText').value = ad.text;
        } catch (e) {}
    }

    document.getElementById('btnSaveAd').addEventListener('click', async () => {
        const payload = {
            enabled: document.getElementById('adToggle').checked,
            imageUrl: document.getElementById('adminAdImage').value.trim(),
            linkUrl: document.getElementById('adminAdLink').value.trim(),
            text: document.getElementById('adminAdText').value.trim()
        };
        await fetch('/api/admin/ad', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(payload) });
        document.getElementById('adSaveStatus').style.display = 'block';
        setTimeout(() => document.getElementById('adSaveStatus').style.display = 'none', 2000);
    });

    document.getElementById('btnAdminClearMsgs').addEventListener('click', async () => {
        if(confirm("Очистить все входящие сообщения?")) { await fetch('/api/messages', { method: 'DELETE' }); updateAdminStats(); }
    });

    // Инициализация
    updateAdminStats(); loadAdminUsersTable(); loadAdSettings();
    setInterval(updateAdminStats, 5000);
});
