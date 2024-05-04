const account = document.getElementById("account");
const loginModal = document.getElementById("login-modal");
const registerModal = document.getElementById("register-modal");
const eventBlock = document.getElementById("event-block");

const loginButton = document.getElementsByClassName("login-btn");
const registerButton = document.getElementsByClassName("register-btn");

const titleText = document.querySelector("h1");
const main = document.querySelector("main");

function showLogin() {
  loginModal.style.display = "block";
  eventBlock.style.display = "none";
  registerModal.style.display = "none";
  titleText.innerHTML = "Welcome!";
  main.style.height = "600px";
}

function showRegister() {
  registerModal.style.display = "block";
  loginModal.style.display = "none";
  eventBlock.style.display = "none";
  titleText.innerHTML = "Welcome!";
  main.style.height = "600px";
}

function hideModal() {
  eventBlock.style.display = "block";
  loginModal.style.display = "none";
  registerModal.style.display = "none";
}

// document.addEventListener("click", (event) => {
//   if (!event.target.closest("#login-modal") && event.target.id !== "account") {
//     hideModal();
//   }
// });

// document.addEventListener("click", (event) => {
//   if (
//     !event.target.closest("#register-modal") &&
//     event.target.id !== "account"
//   ) {
//     hideModal();
//   }
// });
