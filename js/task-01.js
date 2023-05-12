'use strict';
const categories = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories: ${categories.length}`);

const ul = categories.forEach(element => {
  const title = element.querySelector("h2").textContent;
  const itemsLength = element.querySelectorAll("li").length;
  console.log(`Category: ${title}\nElements: ${itemsLength}`);
});
