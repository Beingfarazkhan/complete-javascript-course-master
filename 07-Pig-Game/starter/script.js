'use strict';
const diceEl = document.querySelector('.dice');

const score0El = document.getElementById('score--0');
const player0El = document.querySelector('.player--0');

const score1El = document.getElementById('score--1');
const player1El = document.querySelector('.player--1');

const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

let isPlaying = true;

function switchPlayer() {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

buttonRoll.addEventListener('click', function () {
  // Generate a random dice
  if (isPlaying) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //   display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //   if dice == 1?
    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // document
      //   .querySelector(`.player--${activePlayer}`)
      //   .classList.remove('player--active');

      // player0El.classList.toggle('player--active');
      // player1El.classList.toggle('player--active');
      // activePlayer = activePlayer === 0 ? 1 : 0;
      switchPlayer();
      // document
      //   .querySelector(`.player--${activePlayer}`)
      //   .classList.add('player--active');
    }
  }
});

buttonHold.addEventListener('click', function () {
  // add scores of player to his main score
  if (isPlaying) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //   checking if score>=100
    if (scores[activePlayer] >= 100) {
      isPlaying = false;
      // change css styling
      document.querySelector('body').style.backgroundImage =
        'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)';
      document.getElementById(
        `current--${activePlayer}`
      ).style.backgroundColor = '#7dd56f';
      document.getElementById(`name--${activePlayer}`).style.color = '#7dd56f';
      document.getElementById(
        `name--${activePlayer === 0 ? 1 : 0}`
      ).style.color = '#c7365f';
      document.getElementById(`score--${activePlayer}`).style.color = '#7dd56f';
      document.getElementById(`panel--${activePlayer}`).style.backgroundColor =
        '#7dd56f';

      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

buttonNew.addEventListener('click', function () {
  console.log('new button clicked');
  diceEl.classList.add('hidden');
  isPlaying = true;
  currentScore = 0;
  scores = [0, 0];
  score0El.textContent = 0;
  score1El.textContent = 0;
  document.querySelector('body').style.backgroundImage =
    'linear-gradient(to top left, #753682 0%, #bf2e34 100%)';
  document.getElementById(`current--${activePlayer}`).style.backgroundColor =
    '#c7365f';
  document.getElementById(`name--${activePlayer}`).style.color = '#333';
  document.getElementById(`name--${activePlayer === 0 ? 1 : 0}`).style.color =
    '#333';
  document.getElementById(`score--${activePlayer}`).style.color = '#c7365f';
  document.getElementById(`panel--${activePlayer}`).style.backgroundColor =
    '#c7365f';
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  current0.textContent = 0;
  current1.textContent = 0;
});
