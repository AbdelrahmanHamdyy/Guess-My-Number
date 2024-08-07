'use strict';

// console.log(document.querySelector('.message').textContent);
// DOM (DOCUMENT OBJECT MODEL): Structured representation of html documents that allows JS to access html elements and styles to manipulate them.
// --> Connection between the html document and the JS code
// DOM methods are part of (WEB APIs) --> Libraries written in JS
/*
document.querySelector('.message').textContent = 'Correct Number!🎉';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const getNewTarget = () => Math.trunc(Math.random() * 20) + 1;
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

let target = getNewTarget();
let score = 20;
let highScore = 0;

// EVENT LISTENERS AND HANDLERS

document.querySelector('.check').addEventListener('click', function () {
  // Get the player's input
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // If the input field is empty, guess is 0 (falsy)

  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === target) {
    displayMessage('Correct Number! You WON🎉');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.number').textContent = target;
    // Inline styles
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else {
    displayMessage(guess > target ? 'Too High 📈' : 'Too Low 📉');
    // Decrease the score
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      if (score == 1) document.querySelector('.score').textContent = 0;
      displayMessage('You lost the game! ☹');
    }
  }
});

// AGAIN Btn

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  target = getNewTarget();
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});

// DONE!
