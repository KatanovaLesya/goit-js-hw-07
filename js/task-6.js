// Функція для генерування випадкового кольору у форматі HEX
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Отримуємо елементи DOM
const inputEl = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// Додаємо слухача на кнопку Create
createBtn.addEventListener('click', () => {
  const amount = Number(inputEl.value);

  // Перевірка на значення від 1 до 100
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputEl.value = ''; // Очищуємо значення інпуту після натискання кнопки
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

// Додаємо слухача на кнопку Destroy
destroyBtn.addEventListener('click', destroyBoxes);

// Функція для створення колекції <div>
function createBoxes(amount) {
  // Очищуємо попередню колекцію
  boxesContainer.innerHTML = '';

  const boxes = [];
  let size = 30; // Розмір першого елемента 30px

  // Створюємо кожен <div>
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';

    // Збільшуємо розмір кожного наступного елемента
    size += 10;

    // Додаємо елемент у масив
    boxes.push(box);
  }

  // Додаємо всі елементи в DOM за одну операцію
  boxesContainer.append(...boxes);
}

// Функція для очищення колекції <div>
function destroyBoxes() {
  boxesContainer.innerHTML = ''; // Очищуємо вміст контейнера
}
