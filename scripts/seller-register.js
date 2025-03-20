// scripts/seller-register.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('seller-registration-form');
    
    form.addEventListener('submit', (event) => {
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;

        // Простая валидация email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            event.preventDefault();
            alert('Пожалуйста, введите корректный email.');
            return;
        }

        // Простая валидация телефона
        const phoneRegex = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
        if (!phoneRegex.test(phone)) {
            event.preventDefault();
            alert('Пожалуйста, введите телефон в формате +7 (999) 123-45-67.');
            return;
        }

        // Проверка длины пароля
        if (password.length < 6) {
            event.preventDefault();
            alert('Пароль должен содержать не менее 6 символов.');
            return;
        }
    });
});