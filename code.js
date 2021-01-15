// variables for
var startButton = document.getElementById("startquiz");
var nhsButton = document.getElementById("highscores");
var secondsEl = document.getElementById("seconds");
var question = document.getElementById("question");
var answerEl1 = document.getElementById("answer1");
var answerEl2 = document.getElementById("answer2");
var answerEl3 = document.getElementById("answer3");
var answerEl4 = document.getElementById("answer4");
var container = document.querySelector(".dispq");
var message = document.createElement("p");
var storageKey = "newscore";
var secondsLeft = 75;
var timer;
var i = 0;


// hiding elements, which to be showed later when needed
document.querySelector(".display").style.display = "none";
document.querySelector(".alldone").style.display = "none";
// click button to for main page/start quiz
startButton.addEventListener("click", startQuestions);
// functions for questions and eventlisters for activating answer buttons
function startQuestions() {
  document.querySelector(".display").style.display = "inherit";
  countdown();
  document.querySelector(".start").textContent = null;
  answerEl1.addEventListener("click", function() {
    checkAnswer(answerEl1);
  });
  answerEl2.addEventListener("click", function() {
    checkAnswer(answerEl2);
  });
  answerEl3.addEventListener("click", function() {
    checkAnswer(answerEl3);
  });
  answerEl4.addEventListener("click", function() {
    checkAnswer(answerEl4);
  });
  displayQuestions();
}

