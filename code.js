function countdown() {
    var timeLeft = 300;
    var almostUp = document.getElementById("timeLeft");
    almostUp.textContent = timeLeft;
    console.log(almostUp);
    console.log(timeLeft);
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      console.log(timeLeft);

      if (timeLeft === 1) {
        almostUp.innerHTML = (timeLeft--) + " seconds left";
        console.log("IF == 1");
      }
      else if (timeLeft > 0) {
        almostUp.innerHTML = (timeLeft--) + " seconds left";
        console.log("IF > 0");
      }
      else {
        timerEl.innerHTML = "";
        clearInterval(timeInterval);
        console.log("IF ELSE");
        displayMessage();
      }
    }, 1000);
  }

  countdown();
  