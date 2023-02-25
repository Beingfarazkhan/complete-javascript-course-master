'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Guess 🎉';

// document.querySelector('.number').textContent = 15;
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔No Number!';
    score -= 1;
    document.querySelector('.score').textContent = score;
  }
  // When player wins ...........
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //Guess Too High!!!!!!!!!!!
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High !';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢You Lost the Game!';
      document.querySelector('body').style.backgroundColor = '#D92122';
      //   document.querySelector('body').style.backgroundColor = '#B8203D';
      score -= 1;
      document.querySelector('.score').textContent = score;
    }
  }
  //Guess Too Low!!!!!!!!!!!
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low !';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢You Lost the Game!';
      document.querySelector('body').style.backgroundColor = '#D92122';
      //   document.querySelector('body').style.backgroundColor = '#B8203D';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
