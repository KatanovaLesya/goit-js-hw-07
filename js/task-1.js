// Отримуємо список категорій
const categories = document.querySelectorAll("#categories .item");

// Виводимо кількість категорій
console.log(`Number of categories: ${categories.length}`);

// Проходимо по кожній категорії та виводимо її назву і кількість елементів
categories.forEach(category => {
    const title = category.querySelector("h2").textContent;
    const itemsCount = category.querySelectorAll("ul li").length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemsCount}`);
});
