 'use strict';
// Random Number (between 1 - 20)
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Needed Elements to manipulate it
const number = document.querySelector('.number');
const btnCheck = document.querySelector('.check');
const input = document.querySelector('.guess');
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const btnAgain = document.querySelector('.again');

// start Score
let score = 20;

// Function display message
const displayMessage = function (message) {
  messageEl.textContent = message;
};
btnCheck.addEventListener('click', function () {
  const guess = Number(input.value);
  // No input Case
  if (!guess) {
    displayMessage('⛔️ No Number !');

    // Win Case
  } else if (guess === secretNumber) {
    displayMessage(' 🎉 Correct Number!');
    highScore.textContent =
      score > Number(highScore.textContent)
        ? score
        : Number(highScore.textContent);
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNumber;

    // Low-High Case
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉Too low');
      scoreEl.textContent = --score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreEl.textContent = 0;
    }
  }
});

btnAgain.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
  scoreEl.textContent = 20;
  score = 20;
  displayMessage('Start guessing...');
  number.textContent = '?';
  input.value = '';
});
