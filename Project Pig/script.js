'use strict';

//Selecting Elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting Condition
score0El.textContent = 0;
score1El.textContent = 0;

let currentScore = 0;

diceEl.classList.add('hidden');

//Rolling dice function
btnRoll.addEventListener('click', function () {
  //1. Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. Display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `./pictures/dice-${dice}.png`;

  //3. Chcek the rolled
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore; //change later
  } else {
    // switch to next player
  }
});
