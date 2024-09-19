// Функція для генерування випадкового кольору у форматі HEX
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const changeColorButton = document.querySelector('.change-color');
  const colorSpan = document.querySelector('.color');
  const body = document.body;

  // Обробник події кліку по кнопці
  changeColorButton.addEventListener('click', () => {
    const newColor = getRandomHexColor();
    body.style.backgroundColor = newColor; // Змінюємо колір фону body
    colorSpan.textContent = newColor; // Відображаємо значення кольору в span
  });
});
