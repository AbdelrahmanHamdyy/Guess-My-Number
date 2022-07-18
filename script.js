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

const target = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.number').textContent = target;

// EVENT LISTENERS AND HANDLERS

document.querySelector('.check').addEventListener('click', function () {
  // Get the player's input
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // If the input field is empty, guess is 0 (falsy)

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === target) {
    document.querySelector('.message').textContent =
      'Correct Number! You WON🎉';
    // Inline styles
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else {
    if (guess > target)
      document.querySelector('.message').textContent = 'Too High 📈';
    else if (guess < target)
      document.querySelector('.message').textContent = 'Too Low 📉';
    // Decrease the score
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      if (score == 1) document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You lost the game! ☹';
    }
  }
});
