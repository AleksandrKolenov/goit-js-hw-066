const items = categories.querySelectorAll(".item");
console.log("Number of categories: ", items.length);
items.forEach(toThinkCategories);
function toThinkCategories(item) {
    const tittel = item.querySelector("h2");
    const list = item.querySelector("ul");
    const itemsEl = list.children;
    console.log("Category:", tittel.textContent);
    console.log("Elements: ", itemsEl.length);
}
