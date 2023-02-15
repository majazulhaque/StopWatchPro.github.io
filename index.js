window.onload = function () {
  // Fetching all required element using id
  var millisecond = document.getElementById("milliseconds");
  var appendSeconds = document.getElementById("seconds");
  var startBtn = document.getElementById("start_btn");
  var stopBtn = document.getElementById("stop_btn");
  var resetBtn = document.getElementById("reset_btn");

  // Some global variable to calculate the timer value
  var seconds = 00;
  var tens = 00;
  var timer;
  var time;

  // Onclick event for start button to start the timer
  startBtn.onclick = function () {
    clearInterval(timer);
    timer = setInterval(startTimer, 10); // run setInterval until stop button is not press
  };

  stopBtn.onclick = function () {
    clearInterval(timer);
  };

  resetBtn.onclick = function () {
    // used to reset the timer using reset button
    clearInterval(timer);
    tens = "00";
    seconds = "00";
    millisecond.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };

  // Function to start the timer
  function startTimer() {
    tens++;

    if (tens <= 9) {
      millisecond.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      millisecond.innerHTML = tens;
    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      millisecond.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
};
