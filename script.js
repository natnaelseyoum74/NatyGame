'use strict';

let num;

const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');
const diceImg = document.querySelector('.dice');
const currentScore1 = document.querySelector('#current--0');
const currentScore2 = document.querySelector('#current--1');
const page1 = document.querySelector('.player--0');
const page2 = document.querySelector('.player--1');

score1.textContent = 0;
score2.textContent = 0;
diceImg.classList.add('hidden');
let total = 0;
let finaltotal = [0, 0];
let digit = 0;
let play = true;
const s = function () {
  document.getElementById(`current--${digit}`).textContent = 0;
  total = 0;
  digit = digit === 0 ? 1 : 0;
  page1.classList.toggle('player--active');
  page2.classList.toggle('player--active');
};

rollBtn.addEventListener('click', function () {
  if (play) {
    num = Math.trunc(Math.random() * 6) + 1;
    diceImg.classList.remove('hidden');
    diceImg.src = `dice-${num}.png`;
    console.log(num);
    if (num !== 1) {
      total += num;
      //currentScore1.textContent = total;
      document.getElementById(`current--${digit}`).textContent = total;
    } else {
      s();
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (play) {
    finaltotal[digit] += total;
    document.getElementById(`score--${digit}`).textContent = finaltotal[digit];
    if (finaltotal[digit] >= 10) {
      play = false;
      document
        .querySelector(`.player--${digit}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${digit}`)
        .classList.remove('player--active');
    } else {
      s();
    }
  }
});

newBtn.addEventListener('click', function () {
  play = true;
  total = 0;
  finaltotal[0] = 0;
  finaltotal[1] = 0;
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  document
    .querySelector(`.player--${digit}`)
    .classList.remove('player--winner');
});
