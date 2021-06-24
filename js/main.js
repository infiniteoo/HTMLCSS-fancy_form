// Questions array
const questions = [
  { question: "Enter Your First Name" },
  { question: "Enter Your Last Name" },
  { question: "Enter Your Email", pattern: /\S+@\S+\.\S+/ },
  { question: "Create A Password", type: "password" },
];

// transition times
const shakeTime = 100; // shake transition time
const switchTime = 200; // transition between questions

// init position at first question
let position = 0;

// init dom elements
const formBox = document.querySelector("#form-box");
const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
const inputGroup = document.querySelector("#input-group");
const inputField = document.querySelector("#input-field");
const inputLabel = document.querySelector("#input-label");
const inputProgress = document.querySelector("#input-progress");
const progress = document.querySelector("#progress-bar");

// EVENTS
document.addEventListener("DOMContentLoaded", getQuestion);

// FUNCTIONS

// get question from array and add to markup
function getQuestion() {
  // get current question
  inputLabel.innerHTML = questions[position].question;
  // get current type
  inputField.type = questions[position].type || "text";
  // get current answer
  inputField.value = questions[position].answer || "";
  // focus on element
  inputField.focus();

  // set progres bar width - variable to the questions length
  progress.style.width = (position * 100) / questions.length + "%";

  // add user icon or back arrow depending on question
  prevBtn.className = position ? "fas fa-arrow-left" : "fas fa-user";

  showQuestion();
}

// display question to user
function showQuestion() {
  inputGroup.style.opacity = 1;
  inputProgress.style.transition = "";
  inputProgress.style.width = "100%";
}

// hide question from user
function hideQuestion() {
  inputGroup.style.opacity = 0;
  inputLabel.style.marginLeft = 0;
  inputProgress.style.width = 0;
  inputProgress.style.transition = "";
  inputGroup.style.border = null;
}


