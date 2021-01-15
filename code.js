// function and vars for the timer
function countdown() {
  var timeLeft = 75;
  var almostUp = document.getElementById("timeLeft");
  almostUp.textContent = timeLeft;
  // console.log(almostUp);
  // console.log(timeLeft);
// fucntion that deducts form the timer 1000 miliseconds at a time
  var timeInterval = setInterval(function () {
    // console.log(timeLeft);
// conditionals that act 
    if (timeLeft === 1) {
      almostUp.innerHTML = timeLeft-- + " seconds left";
      // console.log("IF == 1");
    } else if (timeLeft > 0) {
      almostUp.innerHTML = timeLeft-- + " seconds left";
      // console.log("IF > 0");
    } else {
      timerEl.innerHTML = "";
      clearInterval(timeInterval);
      // console.log("IF ELSE");
      displayMessage();
    }
  }, 1000);
}
// calls the countdown fucntion
countdown();
// function for hidding the welcome/start quiz page
document.getElementById("startbtn").addEventListener("click", function(){
  document.getElementById("card").style.visibility = "hidden";
  document.getElementById("container1").style.visibility = "visible";
  console.log("fml");
}); 
document.getElementById("answer").addEventListener("click", function(){
  document.getElementById("container1").style.visibility = "hidden";
  document.getElementById("container2").style.visibility = "visible";
  console.log("hello");
});
document.getElementById("answer1").addEventListener("click", function(){
  document.getElementById("container2").style.visibility = "hidden";
  document.getElementById("container3").style.visibility = "visible";
  console.log("fml");
}); 
document.getElementById("answer2").addEventListener("click", function(){
  document.getElementById("container3").style.visibility = "hidden";
  document.getElementById("container4").style.visibility = "visible";
  console.log("hello");
});
document.getElementById("answer3").addEventListener("click", function(){
  document.getElementById("container4").style.visibility = "hidden";
  document.getElementById("container5").style.visibility = "visible";
  console.log("hello");
});
// var answers =  document.getElementsByClassName("answer");
// console.log(answers);
// for (var i = 0; i < elements.length; i++) {
//   elements[i].addEventListener('click', myFunction, false);
// }
document.getElementById("container5").addEventListener("click", function(){
  document.getElementById("card").style.visibility = "hidden";
  document.getElementById("container1").style.visibility = "visible";
  console.log("yup");
}); 
  


var elements = document.getElementsByClassName("answerBtn");

var myFunction = function() {
    var attribute = this.getAttribute("data-myattribute");
    console.log(attribute);
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}

document.getElementById("startbtn").addEventListener("click", function(){
  document.getElementById("card").style.visibility = "hidden";
  document.getElementById("container1").style.visibility = "visible";
  console.log("fml");
}); 
document.getElementById("answer").addEventListener("click", function(){
  document.getElementById("container1").style.visibility = "hidden";
  document.getElementById("container2").style.visibility = "visible";
  console.log("hello");
});

