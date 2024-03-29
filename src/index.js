/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-globals */

import layout from './lib/layout';
import getRandomInt from './lib/getRandomInt';
import getResultDice from './lib/getResultDice';
import getResultPoint from './lib/getResultPoint';

(() => {
  layout('bet-form');

  let balance = 500;
  let rolledPoint = 0;
  const betBtn = document.querySelector('.bet');
  const balanceResult = document.querySelector('#balance');

  balanceResult.innerHTML = `${balance}$`;

  function rollDice() {
    const cube1 = getRandomInt(1, 6);
    const cube2 = getRandomInt(1, 6);
    const sum = cube1 + cube2;
    let decision = getResultDice(cube1, cube2);
    const bet = document.getElementById('bet').value;
    const betWin = bet * 2;
    const error = document.getElementById('input-error');
    document.getElementById('balance-result').innerHTML = `${balance}$`;
    document.getElementById('dice-first-result').innerHTML = cube1;
    document.getElementById('dice-second-result').innerHTML = cube2;

    if (rolledPoint) {
      decision = getResultPoint(cube1, cube2, rolledPoint);
    }

    if (!bet.length || bet > balance || bet <= 0) {
      if (balance === 0) {
        return;
      }
      error.innerHTML = 'Некорректная ставка';
    } else {
      if (decision === 'point') {
        if (!rolledPoint) {
          rolledPoint = sum;
        }
        layout('bet-point');
        document.getElementById('bet-amound').innerHTML = `${bet}$`;
        document.getElementById('point').innerHTML = rolledPoint;
        document.getElementById('dice-first-point').innerHTML = cube1;
        document.getElementById('dice-second-point').innerHTML = cube2;
      } else {
        layout('bet-result');
        rolledPoint = 0;
        const result = document.getElementById('result-text');
        if (decision === 'win') {
          result.innerHTML = `Вы выграли, и получаете <strong>${betWin}$</strong>`;
          balance += betWin;
        } else {
          result.innerHTML = `Ваша ставка в <strong>${bet}$</strong> не сыграла`;
          balance -= bet;
        }
        balanceResult.innerHTML = `${balance}$`;
        document.querySelector('.button-result').addEventListener('click', () => {
          layout('bet-form');
        });
      }
      if (balance === 0) {
        document.getElementById('bet').style.display = 'none';
        betBtn.innerHTML = 'Начать заново';
        betBtn.addEventListener('click', () => {
          location.reload();
        });
      }
      error.innerHTML = '';
    }
  }

  betBtn.onclick = rollDice;
  document.querySelector('.point').onclick = rollDice;

  const rules = document.querySelector('.header-rules-list');

  document.querySelector('.header-rules').addEventListener('mouseover', () => {
    rules.style.display = 'block';
  });
  document.querySelector('.header-rules-close').addEventListener('click', () => {
    rules.style.display = 'none';
  });
})();
