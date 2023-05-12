const refs = {
  control: document.querySelector("#controls input"),
  create: document.querySelector("button[data-create]"),
  destroy: document.querySelector("button[data-destroy]"),
  box: document.querySelector("#boxes"),
};
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const element = document.createElement("div");

    element.style.width = 30 + (10 * i) + "px";
    element.style.height = 30 + "px";
    element.style.backgroundColor = getRandomHexColor();

    refs.box.append(element);
  }
}

refs.create.addEventListener("click", onCreateElement);

function onCreateElement() {
  const amount = refs.control.value;
  if (amount > 0) {
    createBoxes(amount);
  }
}

refs.destroy.addEventListener("click", onDestroyElement);

function onDestroyElement() {
  refs.box.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
