const form = document.forms[0];
const inputField = document.getElementById("email");
const errorMsg = document.querySelector("form p");
const regEx = /^\w+@\w+\.\w+$/;

form.addEventListener("submit", function (e) {
  if (inputField.value === "") {
    e.preventDefault();
    inputField.classList.add("error");
    errorMsg.textContent = "Whoops! It looks like you forgot to add your email";
    errorMsg.classList.add("error");
  } else if (!regEx.test(inputField.value)) {
    e.preventDefault();
    inputField.classList.add("error");
    errorMsg.textContent = "Please provide a valid email address";
    errorMsg.classList.add("error");
  }
});

//testing the regEx
console.log(regEx.test("example@email/com"));
