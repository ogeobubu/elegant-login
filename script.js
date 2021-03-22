const submit = document.querySelector("#submit");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const eye = document.querySelector("#eye");
const validator = document.querySelector("#validator");
const error = document.querySelector(".error");
const success = document.querySelector(".success");
const eyeIcon = document.querySelector(".eye-password");

const showPassword = "password";
const showText = "text";

const showErrorMessage = (message) => {
  validator.classList.add("error");
  validator.innerHTML = message;

  setTimeout(() => {
    validator.classList.remove("error");
    validator.innerHTML = "";
  }, 3000);
};

const showSuccessMessage = (message) => {
  validator.classList.add("success");
  validator.innerHTML = message;

  setTimeout(() => {
    validator.classList.remove("success");
    validator.innerHTML = "";
  }, 3000);
};

eye.addEventListener("click", () => {
  if (password.type === showPassword) {
    password.type = showText;
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    password.type = showPassword;
    eyeIcon.classList.add("fa-eye");
    eyeIcon.classList.remove("fa-eye-slash");
  }
});

submit.addEventListener("submit", (e) => {
  e.preventDefault();

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const user = {
    username: username.value.trim(),
    email: email.value.trim(),
    password: password.value.trim(),
    confirmPassword: confirmPassword.value.trim(),
  };

  if (
    user.username === "" ||
    user.email === "" ||
    user.password === "" ||
    user.confirmPassword === ""
  ) {
    showErrorMessage("All fields is required!");
  } else if (!validateEmail(user.email)) {
    showErrorMessage("Email is invalid.");
  } else if (user.password.length < 6) {
    showErrorMessage("Password must contain at least 6 characters.");
  } else if (user.password !== user.confirmPassword) {
    showErrorMessage("Passwords do not match.");
  } else {
    showSuccessMessage("Login is successful.");
  }
});
