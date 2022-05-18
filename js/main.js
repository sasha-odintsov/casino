function layout(element) {
    document
        .querySelectorAll("section")
        .forEach((section => 
            section.style.display = "none"));
    document.getElementById(element).style.display = "block";
}

layout("bet-form");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let balance = 500;
let rolledPoint = 0;

document.querySelector("#balance").innerHTML = balance + "$";

// ******with point******//

function getResultDice(a, b) { 
    let sum = a + b;
    if (sum === 7 || sum === 11) {
        return "win";
    } else if (sum === 2 || sum === 8 || sum === 12) {
        return "lose";
    } else { 
        return "point";
    }
}

function getResultPoint(a, b, point) {
    let sum = a + b;
    if (sum === 7) {
        return "lose";        
    } else if (sum === point) {
        return "win";
    } else {
        return "point";        
    }
}

function tryMore() {
    layout("bet-form");
}

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

    if (!bet.length || bet > balance) {
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
            document.querySelector('.button-result').onclick = tryMore;
        } 
        error.innerHTML = '';
    }
}

//*****without point*****//

// function rollDice() { 
//     let cube1 = getRandomInt(1, 6);
//     let cube2 = getRandomInt(1, 6);    
//     let betWin = document.getElementById("bet").value * 2;
//     let bet = document.getElementById("bet").value;    
//     document.getElementById("balance-result").innerHTML = balance + "$";
//     document.getElementById("dice-first-result").innerHTML = cube1;
//     document.getElementById("dice-second-result").innerHTML = cube2;
//     layout("bet-result");
//     if (getResultDice(cube1, cube2) === "win") {
//         document.getElementById("result-text").innerHTML = `Вы выграли, и получаете <strong>${betWin}$</strong>`;
//         balance = balance + betWin;    
//     } else {   
//         document.getElementById("result-text").innerHTML = `Ваша ставка в <strong>${bet}$</strong> не сыграла`;
//         balance = balance - bet;
//     }
//     document.getElementById("balance").innerHTML = balance + "$";
//     document.querySelector('.button-result').addEventListener('click', function(){
//         tryMore();
//     })
// }

// function getResultDice (a, b) { 
//     let sum = a + b;
//     return (sum === 7 || sum === 11) ? "win" : "lose";
// }

// function tryMore() {
//     layout("bet-form");
// }