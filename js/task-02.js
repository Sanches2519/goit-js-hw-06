const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientEl = document.querySelector("#ingredients");
const ingEL = ingredients.map((ingredient) => {
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("item");
  return element;
});

ingredientEl.append(...ingEL);
// console.log(ingredientEl)
