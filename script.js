let startTime, updatedTime, difference, timerInterval;
let running = false;

const display = document.getElementById('display');

function updateDisplay(time) {
  const ms = time % 1000;
  const totalSeconds = Math.floor(time / 1000);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600);

  display.textContent = 
    `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${ms.toString().padStart(3, '0')}`;
}

function pad(n) {
  return n.toString().padStart(2, '0');
}

function start() {
  if (!running) {
    running = true;
    startTime = new Date().getTime() - (difference || 0);
    timerInterval = setInterval(() => {
      updatedTime = new Date().getTime();
      difference = updatedTime - startTime;
      updateDisplay(difference);
    }, 10);
  }
}

function stop() {
  running = false;
  clearInterval(timerInterval);
}

function reset() {
  running = false;
  clearInterval(timerInterval);
  difference = 0;
  updateDisplay(0);
}

