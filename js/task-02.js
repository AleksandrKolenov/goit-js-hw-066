const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredient = document.querySelector('#ingredients')
const markup = ingredients.map((text) => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = text;
  return item
})
ingredient.append(...markup);