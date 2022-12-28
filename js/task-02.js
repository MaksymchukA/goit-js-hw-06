const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.getElementById("ingredients");
console.log(listEl);

// ingredients.forEach ((ingredient) => {
//   const itemEl = document.createElement("li");
//   itemEl.textContent = ingredient;
//   itemEl.classList.add("item");
//   listEl.appendChild(itemEl);
// })


// for (let ingredient of ingredients) {
//  let itemEl = document.createElement("li");
//  itemEl.textContent = ingredient;
//  itemEl.classList.add("item");
//  listEl.append(itemEl);
// }


const list = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList.add("item");
  return itemEl;
});
listEl.append(...list);