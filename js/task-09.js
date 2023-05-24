const refs = {
  body: document.querySelector("body"),
  container: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
};

refs.container.addEventListener("click", onBodyBackgroundColor);

function onBodyBackgroundColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = refs.body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
