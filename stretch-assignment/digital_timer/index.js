const secondTens = document.querySelector("#secondTens");
const secondOnes = document.querySelector("#secondOnes");

const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");

let startTime = Date.now();
let secondsCounter = 0;

function displayTime() {
  let secondsOnesIndex = Math.floor(secondsCounter / 10000);

  if (secondsCounter > 1000) {
    secondOnes.textContent = secondsCounter.toString()[secondsOnesIndex];
    msHundreds.textContent = secondsCounter.toString()[1];
    msTens.textContent = secondsCounter.toString()[2];
  } else {
    secondOnes.textContent = "0";
    msHundreds.textContent = "0";
    msTens.textContent = "0";
  }

  secondsTensCount = secondsCounter;

  if (secondsTensCount > 10000) {
    secondTens.textContent = secondsTensCount.toString()[0];
  } else {
    secondTens.textContent = "0";
  }
}

function timer() {
  if (secondsCounter < 10001) {
    secondsCounter = Date.now() - startTime;
  }

  displayTime();
}

window.setInterval(timer, 1000 / 60);
