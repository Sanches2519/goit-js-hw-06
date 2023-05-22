const refs = {
  form: document.querySelector(".login-form"),
};
refs.form.addEventListener("submit", onButtonSubmit);

function onButtonSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  const data = {
    email: email.value,
    password: password.value,
  };
  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені");
  } else if (email.value === email || password.value === password) {
   event.currentTarget.value;
  } else if (email.value !== "" || password.value !== "") {
    event.currentTarget.reset();
  }


  console.log(data);
}
