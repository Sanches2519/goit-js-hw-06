const refs = {
  input: document.querySelector("#name-input"),
  title: document.querySelector("h1"),
  span: document.querySelector("#name-output"),
};
refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (refs.input.value === "") {
    refs.title.textContent = refs.span.textContent;
  } else {
    refs.title.textContent = event.currentTarget.value;
  }
}
