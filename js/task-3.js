// Отримуємо посилання на інпут і спан
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

// Додаємо слухач події input на інпут
input.addEventListener('input', (event) => {
    // Очищаємо значення від зайвих пробілів по краях
    const trimmedValue = event.target.value.trim();

    // Якщо інпут порожній або містить лише пробіли, використовуємо "Anonymous"
    output.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});
