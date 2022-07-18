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

// EVENT LISTENERS AND HANDLERS

document.querySelector('.check').addEventListener('click', function () {
  // console.log(document.querySelector('.guess').value); // Handler
  // document.querySelector('.message').textContent = 'Correct Number!🎉';
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // If the input field is empty, guess is 0 (falsy)
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }
});
