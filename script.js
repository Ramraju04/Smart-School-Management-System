// Theme Toggle
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Example: Dynamic Dashboard Data (can be extended to fetch real data)
document.getElementById('studentCount').textContent = 312;
document.getElementById('teacherCount').textContent = 22;
