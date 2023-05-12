const reft = {
  sum: document.querySelector('[data-action="decrement"]'),
  difference: document.querySelector('[data-action="increment"]'),
  span: document.querySelector("value"),
  table: document.querySelector("counter"),
};

let counterValue = 0;
const decrement = () => {
  counterValue -= 1;
  document.getElementById("value").textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  document.getElementById("value").textContent = counterValue;
};

reft.sum.addEventListener("click", decrement);
reft.difference.addEventListener("click", increment);
