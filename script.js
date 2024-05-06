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
  eventMore.style.display = "none";
  titleText.innerHTML = "Welcome!";
  main.style.height = "600px";
}

function showRegister() {
  registerModal.style.display = "block";
  loginModal.style.display = "none";
  eventBlock.style.display = "none";
  eventMore.style.display = "none";
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

window.onclick = function (event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
};

// document.addEventListener("click", (event) => {
//   if (
//     !event.target.closest("#register-modal") &&
//     event.target.id !== "account"
//   ) {
//     hideModal();
//   }
// });

const events = document.querySelectorAll(".event");
const eventMore = document.getElementById("event-more");

events.forEach(function (event) {
  event.addEventListener("click", function () {
    eventShow();
  });
});

function eventShow() {
  eventMore.style.display = "block";
  eventBlock.style.display = "none";
  main.style.height = "600px";
}

const closeButton = document.querySelector(".close-btn");

closeButton.addEventListener("click", function () {
  eventBlock.style.display = "block";
  eventMore.style.display = "none";
  main.style.height = "850px";
});

// Register and login

const username = document.querySelector("#username");
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const submit = document.querySelector("#submit");

let users = {};

function User(username, name, password) {
  this.username = username;
  this.name = this.name;
  this.password = password;
}

function createID(users) {
  return Object.keys(users).length;
}

submit.addEventListener("click", () => {
  const loginUser = username.value;
  const nameUser = name.value;
  const passwordUser = password.value;

  const user = new User(loginUser, nameUser, passwordUser);

  const userID = "User" + createID(users);
  users[userID] = user;
  console.log(users);

  alert(`${nameUser}, you have successfully registered!`);

  profile.style.display = "block";
});

const profile = document.getElementById("profile");
