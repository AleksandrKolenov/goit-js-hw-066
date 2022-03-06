const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');

const elements = ingredients.map((el) => {
  const titleEl = document.createElement('li');
  titleEl.classList.add('item');
  titleEl.textContent = el;
  
  return titleEl;
});

list.append(...elements);
