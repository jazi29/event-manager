const account = document.getElementById("account");
const loginModal = document.getElementById("login-modal");
const registerModal = document.getElementById("register-modal");
const eventBlock = document.getElementById("event-block");

const loginButton = document.getElementsByClassName(".login-btn");
const registerButton = document.getElementsByClassName(".register-btn");

const titleText = document.getElementById("titleText");

// account.addEventListener("click", showLogin());

function showLogin() {
  loginModal.style.display = "block";
  eventBlock.style.display = "none";
  registerModal.style.display = "none";
  titleText.innerHTML = "Welcome!";
}

function showRegister() {
  registerModal.style.display = "block";
  loginModal.style.display = "none";
  eventBlock.style.display = "none";
  titleText.innerHTML = "Welcome!";
}
