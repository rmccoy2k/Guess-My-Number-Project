// Remember, we're gonna use .textontentstrict mode in all scripts now!

'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.number').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const x = function () {
  console.log(23);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🤬 No number!';
  }
});
// Remember, we're gonna use .textontentstrict mode in all scripts now!

'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.number').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const x = function () {
  console.log(23);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🤬 No number!';
  }
});
