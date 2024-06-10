const categoriesList = document.getElementById('categories');
const categoriesItems = categoriesList.querySelectorAll('li.item');

const numberOfCategories = categoriesItems.length;
console.log(`Number of categories: ${numberOfCategories}`);

categoriesItems.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const elementsCount = category.querySelectorAll('ul li').length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementsCount}`);
});
