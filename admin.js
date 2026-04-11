/**
 * AURA 2.5 - Admin Panel Core
 */

let currentUser = localStorage.getItem('aura_user') ? JSON.parse(localStorage.getItem('aura_user')) : null;

// Защита страницы
if (!currentUser || currentUser.role !== 'admin') {
    window.location.href = '/';
}

function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));
}

function getRoleBadge(role) {
    if (role === 'admin') return '<span class="role-badge badge-admin">Админ (Nygma)</span>';
    if (role === 'pro') return '<span class="role-badge badge-pro">PRO Подписка</span>';
    if (role === 'user') return '<span class="role-badge badge-user">Пользователь</span>';
    return '<span class="role-badge badge-visitor">Посетитель</span>';
}

async function updateAdminStats() {
    fetch('https://api.ipify.org?format=json').then(r => r.json()).then(d => document.getElementById('adminIP').textContent = d.ip).catch(()=>{});
    try {
        const res = await fetch('/api/stats');
        const data = await res.json();
        document.getElementById('adminOnlineCount').textContent = data.online;
        const tbody = document.getElementById('adminUsersTable');
        tbody.innerHTML = data.sessions.length === 0 ? '<tr><td colspan="4" style="text-align:center; color:#888;">Пусто</td></tr>' : '';
        data.sessions.forEach(s => {
            const uName = s.username ? `<b>${escapeHTML(s.username)}</b>` : '<span style="color:#666;">Без регистрации</span>';
            tbody.innerHTML += `<tr><td style="color:var(--accent-1); font-family:monospace;">${s.ip}</td><td>${uName}</td><td>${getRoleBadge(s.role)}</td><td style="text-align:center; font-weight:bold;">${s.downloads}</td></tr>`;
        });

        // Сообщения
        const msgsRes = await fetch('/api/messages');
        const msgs = await msgsRes.json();
        const msgContainer = document.getElementById('adminMessagesBox');
        msgContainer.innerHTML = msgs.length === 0 ? '<div style="color:#888; font-size:14px;">Входящих сообщений нет.</div>' : '';
        msgs.forEach(m => {
            msgContainer.innerHTML += `<div style="border-bottom: 1px solid rgba(255,255,255,0.05); padding: 15px 0;"><div style="color: var(--accent-1); font-size: 12px; margin-bottom: 8px;">${m.date} | От: ${escapeHTML(m.email)}</div><div style="color: var(--text-main); font-size: 15px;">${escapeHTML(m.text)}</div></div>`;
        });
    } catch (e) {}
}

async function loadAdminUsersTable() {
    try {
        const res = await fetch('/api/admin/users');
        const usersList = await res.json();
        const tbody = document.getElementById('adminAllUsersTable');
        tbody.innerHTML = '';
        usersList.forEach(u => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td style="font-weight:bold;">${escapeHTML(u.username)}</td>
                <td style="color: var(--text-muted);">${escapeHTML(u.email) || '—'}</td>
                <td>${getRoleBadge(u.role)}</td>
                <td>
                    <select class="admin-role-select" data-user="${escapeHTML(u.username)}">
                        <option value="user" ${u.role === 'user' ? 'selected' : ''}>Пользователь</option>
                        <option value="pro" ${u.role === 'pro' ? 'selected' : ''}>PRO</option>
                        <option value="admin" ${u.role === 'admin' ? 'selected' : ''}>Админ</option>
                    </select>
                </td>
            `;
            tbody.appendChild(tr);
        });

        document.querySelectorAll('.admin-role-select').forEach(select => {
            select.addEventListener('change', async (e) => {
                const targetUser = e.target.getAttribute('data-user');
                const newRole = e.target.value;
                await fetch('/api/admin/update-role', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({username: targetUser, role: newRole}) });
                loadAdminUsersTable();
            });
        });
    } catch(e) {}
}

document.addEventListener('DOMContentLoaded', () => {
    updateAdminStats();
    loadAdminUsersTable();
    setInterval(updateAdminStats, 5000);

    document.getElementById('btnAdminClearMsgs').addEventListener('click', async () => {
        if(confirm("Очистить все входящие сообщения?")) {
            await fetch('/api/messages', { method: 'DELETE' });
            updateAdminStats();
        }
    });
});
