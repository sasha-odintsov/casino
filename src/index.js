import layout from './lib/layout';
import getRandomInt from './lib/getRandomInt';
import getResultDice from './lib/getResultDice';
import getResultPoint from './lib/getResultPoint';

(() => {
    layout("bet-form");
    
    let balance = 500;
    let rolledPoint = 0;
    
    document.querySelector("#balance").innerHTML = balance + "$";
       
    function rollDice() {
        let cube1 = getRandomInt(1, 6);
        let cube2 = getRandomInt(1, 6);
        let sum = cube1 + cube2;
        let decision = getResultDice(cube1, cube2);
        let bet = document.getElementById("bet").value;
        let betWin = bet * 2;
        let error = document.getElementById('input-error');
        document.getElementById("balance-result").innerHTML = balance + "$";
        document.getElementById("dice-first-result").innerHTML = cube1;
        document.getElementById("dice-second-result").innerHTML = cube2;
    
        if (rolledPoint) {
            decision = getResultPoint(cube1, cube2, rolledPoint);
        }
    
        if (!bet.length || bet > balance || bet == 0) {
            error.innerHTML = 'Некорректная ставка';
            return;
        } else {
            if (decision === "point") {
                if (!rolledPoint) {
                    rolledPoint = sum;
                }; 
                layout("bet-point");
                document.getElementById("bet-amound").innerHTML = bet + "$";
                document.getElementById("point").innerHTML =  rolledPoint;
                document.getElementById("dice-first-point").innerHTML = cube1;
                document.getElementById("dice-second-point").innerHTML = cube2;   
            } else {
                layout("bet-result");
                rolledPoint = 0;
                let result = document.getElementById("result-text");
                if (decision === "win") {
                    result.innerHTML = `Вы выграли, и получаете <strong>${betWin}$</strong>`;
                    balance = balance + betWin;
                } else {
                    result.innerHTML = `Ваша ставка в <strong>${bet}$</strong> не сыграла`;
                    balance = balance - bet;
                }
                document.getElementById("balance").innerHTML = balance + "$";
                document.querySelector('.button-result').addEventListener('click', () => {
                    layout("bet-form");
                });
            } 
            error.innerHTML = '';
        }
    }
    
    document.querySelector('.bet').onclick = rollDice;
    document.querySelector('.point').onclick = rollDice;
    
    let rules = document.querySelector('.header-rules-list');
    
    document.querySelector('.header-rules').addEventListener('mouseover', function() {
        rules.style.display = 'block';
    });
    document.querySelector('.header-rules-close').addEventListener('click', function() {
        rules.style.display = 'none';
    });
    
    window.addEventListener("orientationchange", function () {
        const footer = document.querySelector('.footer');
        const header = document.querySelector('.header-title');
        if (window.orientation == 90 && innerWidth < 499) {
            footer.style.display = 'none';
            header.style.padding = '20px';
        } else {
            footer.style.display = 'block';
            header.style.padding = '30px';
        }
    });
})();
