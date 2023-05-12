const refs = {
  size: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

refs.size.addEventListener("input", onFontSizeInput);

function onFontSizeInput(event) {
  refs.span.style.fontSize = event.currentTarget.value + "px";
}
