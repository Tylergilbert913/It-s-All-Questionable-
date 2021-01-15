// variables for all functions
var startButton = document.getElementById("startquiz");
var nhsButton = document.getElementById("highscores");
var secondsEl = document.getElementById("seconds");
var question = document.getElementById("question");
var answerEl1 = document.getElementById("answer1");
var answerEl2 = document.getElementById("answer2");
var answerEl3 = document.getElementById("answer3");
var answerEl4 = document.getElementById("answer4");
var container = document.querySelector(".quest");
var message = document.createElement("p");
var storageKey = "newscore";
var secondsLeft = 75;
var timer = "";
var i = 0;

// questions/answers for the quiz
var questions = [
    {
      title: "Which one these is used to link a class in CSS",
      choices: ["@", "#", "*", "."],
      answer: "."
    },
    {
      title: "What are JavaScript data types?",
      choices: ["Numbers", "Boolean", "Object", "All The Above"],
      answer: "All The Above"
    },
    {
      title: "What does CSS stand for",

      choices: ["Curly Sister Stumps","Clear Sanitary Stools","Cascading Style Seperator","Cascading Style Sheets"],

      answer: "Cascading Style Sheets"
    },
    {
      title: "What does HTML stand for?",

      choices: ["Hot Timid Metal Lanyards ", "HyperText Markup Language", "HyperText Margin Language", "Highly Toned Marble Lures"],

      answer: "hyperText Markup Language"
    }
  ];



// hiding elements, then showing them when needed
document.querySelector(".quest").style.display = "none";
document.querySelector(".alldone").style.display = "none";

startButton.addEventListener("click", startQuestions);

function startQuestions() {
  document.querySelector(".quest").style.display = "inherit";
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
  dispQuestions(0);
}
// function calling questions and answers
function dispQuestions(i) {
  question.textContent = questions[i].title;
  answerEl1.textContent = questions[i].choices[0];
  answerEl2.textContent = questions[i].choices[1];
  answerEl3.textContent = questions[i].choices[2];
  answerEl4.textContent = questions[i].choices[3];
}
// function that tells wether the answer is correct or not/which deducts time by 10 seconds
function checkAnswer(element) {
  correct = questions[i].answer;
  if (element.textContent === correct) {
     
  } else {
    secondsLeft = secondsLeft - 10;
    
    if (secondsLeft <= 0) {
      secondsEl.textContent = 0;
      secondsLeft = 0;
      endQuiz();
    }
  }
  i++;
  if (i === questions.length) {
    endQuiz();
  } else {
    dispQuestions(i);
  }
}
// function showing how many seconds are left in the quiz
function countdown() {
  secondsEl.textContent = secondsLeft;
  timer = setInterval(myTimer, 1000);
  function myTimer() {
    secondsLeft--;
    secondsEl.textContent = secondsLeft;
  }
}
// function ending quiz and hiding the questions then showing the all done page
function endQuiz() {
  clearInterval(timer);
  secondsEl.textContent = secondsLeft;
  document.querySelector(".quest").style.display = "none";
  document.querySelector(".alldone").style.display = "inherit";
  document.querySelector("#score").textContent = secondsLeft;
}

// submits score and store in localstorage
nhsButton.addEventListener("click", function(event) {
  event.preventDefault();
  var oldScore = JSON.parse(localStorage.getItem(storageKey));
  if (oldScore === null) {
    oldScore = Array();
  }
  var score = document.getElementById("score").textContent;
  var initials = document.getElementById("initials").value.trim();
  var newscore = {
    name: initials,
    score: score
  };
  oldScore.push(newscore);
  localStorage.setItem(storageKey, JSON.stringify(oldScore));
});

var resetButton = document.getElementById("reset");
var displScores = document.getElementById("display");

// resets the highschore and displays the go back page
resetButton.addEventListener("click", resetFn);
function resetFn() {
  localStorage.clear();
  $("#display").text(null);
}

