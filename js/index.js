var startBtn = document.getElementById('start_btn');
var stopBtn = document.getElementById('stop_btn');
var resetBtn = document.getElementById('reset_btn');
var timer = document.getElementById('text_timer');
var minute = document.getElementById('minute');
var second = document.getElementById('second');

// Global Variable
var min = 00;
var sec = 00;
var time = 1;
// Function to start the timer.
function startTimer(){
    min++;
    sec++;
    minute.innerText = min;
    second.innerText = sec;
}

// Function to stop the timer.
function stopTimer(){
    timer.innerText = "30";

}

// Function to reset the timer.
function resetTimer(){
    min = 00;
    sec = 00;
    minute.innerText = min;
    second.innerText = sec;
}

// startBtn.addEventListener('click', startTimer());
// stopBtn.addEventListener('click', stopTimer());
// resetBtn.addEventListener('click', resetTimer());