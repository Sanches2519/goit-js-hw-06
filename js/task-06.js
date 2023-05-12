"use strict";
const inputEL =  document.querySelector("input");

inputEL.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (inputEL.dataset.length == this.value.length) {
    this.classList.add("valid");
    this.classList.remove("invalid");
  } else {
    this.classList.remove("valid");
    this.classList.add("invalid");
  }
};


