let time = document.getElementById('time');
let btn = document.getElementById('btn');
let result = document.getElementById('timer__result');

btn.addEventListener('click', function () {
  endTime = parseInt(time.value);
});

const timer = setInterval(function () {
  let seconds = endTime % 60;
  let minutes = (endTime / 60) % 60;
  let hour = (endTime / 60 / 60) % 60;
  if (endTime <= 0) {
    clearInterval(timer);
    result.innerHTML = "Время истекло";
  } else {
    let timerResult = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
    result.innerHTML = timerResult;
    endTime = endTime - 1;
  }
}, 1000);

timer;