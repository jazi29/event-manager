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
  eventBlock.style.display = "none";
  loginModal.style.display = "block";
  registerModal.style.display = "none";
}

//_________________________________________________
console.log(loginModal);
window.onclick = function (event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
};

window.onclick = function (event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  } else if (
    event.target !== account &&
    event.target !== loginButton &&
    event.target !== registerButton
  ) {
    // hideModal();
  } else {
    eventBlock.style.display = "block";
  }
};

// ___________________________________________________________

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

document.addEventListener("DOMContentLoaded", function () {
  fetch("events.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const events = document.querySelectorAll(".event");
      events.forEach((event, index) => {
        event.addEventListener("click", function () {
          const eventDetail = data[index];
          if (eventDetail) {
            displayModal(eventDetail);
          } else {
            console.error("Event not found");
          }
        });
      });
    })
    .catch((error) => console.error("Error", error));
});

function displayModal(eventDetail) {
  document.getElementById("event-name").textContent = eventDetail.name;
  document.getElementById("event-image").src = eventDetail.image;
  document.getElementById("event-description").textContent =
    eventDetail.description;
  document.getElementById("event-date").textContent = eventDetail.date;
  document.getElementById("event-place").textContent = eventDetail.place;
  document.getElementById("event-more").style.display = "block";
  document.body.insertAdjacentHTML(
    "beforeend",
    '<div class="overlay" onclick="closeEvent()"></div>'
  );
}

// function closeEvent() {
//   const closeButton = document.querySelector(".close-btn");
//   const overlay = document.querySelector(".overlay");

//   closeButton.addEventListener("click", function () {
//     eventBlock.style.display = "block";
//     eventMore.style.display = "none";
//     main.style.height = "850px";
//     if (overlay) {
//       overlay.remove();
//     }
//   });
// }

document.addEventListener("DOMContentLoaded", function () {
  closeEvent();
});

function closeEvent() {
  const closeButton = document.querySelector(".close-btn");
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      if (eventBlock && eventMore && main) {
        eventBlock.style.display = "block";
        eventMore.style.display = "none";
        main.style.height = "850px";
      }
    });
  }
}

// ___________________________________________________________
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

const profile = document.getElementById("profile");
const profileElement = document.querySelector(".profile-element");

submit.addEventListener("click", () => {
  const loginUser = username.value;
  const nameUser = name.value;
  const passwordUser = password.value;

  if (loginUser === "" || nameUser === "" || passwordUser === "") {
    alert("Please fill in all fields.");
    return;
  }

  const user = new User(loginUser, nameUser, passwordUser);

  const userID = "User" + createID(users);
  users[userID] = user;
  console.log(users);

  alert(`${nameUser}, you have successfully registered! Please re-login`);
  loginModal.style.display = "block";
  registerModal.style.display = "none";
});

// Login
const bookingticket = document.getElementById("reserv");

bookingticket.addEventListener("click", () => {
  eventBlock.style.display = "none";
  loginModal.style.display = "block";
  eventMore.style.display = "none";
});

const loginUsername = document.getElementById("login-username");
const loginPassword = document.getElementById("login-password");
const loginSubmit = document.getElementById("login-submit");

loginSubmit.addEventListener("click", () => {
  const enterUsername = loginUsername.value;
  const enterPassword = loginPassword.value;

  if (enterUsername === "" || enterPassword === "") {
    alert("Empty details");
    return;
  }

  const userExists = Object.values(users).some(
    (user) => user.username === enterUsername && user.password === enterPassword
  );

  if (userExists) {
    alert(`Welcome ${enterUsername}!`);
    profile.style.display = "block";
    loginModal.style.display = "none";
    eventBlock.style.display = "block";
    main.style.height = "850px";
    profileElement.textContent = enterUsername;
    bookingticket.addEventListener("click", () => {
      bookingticket.innerHTML = "Booked";
      bookingticket.style.background = "#4e5e8a";
    });
  } else {
    alert("Incorrect username or password.");
  }
});

// Logout

const logOut = document.getElementById("log-out");

logOut.addEventListener("click", () => {
  profile.style.display = "none";
  eventBlock.style.display = "block";
  eventMore.style.display = "none";
  loginModal.style.display = "none";
});
