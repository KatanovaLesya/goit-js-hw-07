// Отримуємо посилання на форму
const loginForm = document.querySelector('.login-form');

// Додаємо слухач події submit
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Зупиняємо перезавантаження сторінки

    // Отримуємо значення полів форми
    const email = loginForm.elements.email.value.trim();
    const password = loginForm.elements.password.value.trim();

    // Перевірка, чи всі поля заповнені
    if (email === '' || password === '') {
        alert('All form fields must be filled in');
        return; // Зупиняємо подальше виконання, якщо є порожні поля
    }

    // Створюємо об'єкт з даними форми
    const formData = {
        email,
        password,
    };

    // Виводимо об'єкт з даними в консоль
    console.log(formData);

    // Очищуємо форму після сабміту
    loginForm.reset();
});

