const container = document.querySelector(".change-color");
const span = document.querySelector('.color');
container.addEventListener("click", onBodyBackgroundColor);

function onBodyBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
