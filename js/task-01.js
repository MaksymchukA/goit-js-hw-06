const listEl = document.querySelector("#categories");

const itemElLength = listEl.children.length;
console.log(`Number of categories: ${itemElLength}`);

const itemEl = document.querySelectorAll("li.item");

itemEl.forEach((item) => {
const titleEl = item.firstElementChild.textContent;
const elem = item.lastElementChild.children.length;
console.log(`Category: ${titleEl}`);
console.log(`Elements: ${elem}`);
});
