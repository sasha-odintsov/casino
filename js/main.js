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

//----without point----
function rollDice() { 
    let cube1 = getRandomInt(1, 6);
    let cube2 = getRandomInt(1, 6);    
    let betWin = document.getElementById("bet").value * 2;
    let bet = document.getElementById("bet").value;    
    document.getElementById("balance-result").innerHTML = balance + "$";
    if (getResultDice(cube1, cube2) === "win") {
        layout("bet-result");
        document.getElementById("result-text").innerHTML = `Вы выграли, и получаете <strong>${betWin}$</strong>`;
        balance = balance + betWin;
        document.getElementById("balance").innerHTML = balance + "$";
    } else {
        layout("bet-result");
        document.getElementById("result-text").innerHTML = `Ваша ставка в <strong>${bet}$</strong> не сыграла`;
        balance = balance - bet;
        document.getElementById("balance").innerHTML = balance + "$";
    }
    document.getElementById("dice-first-result").innerHTML = cube1;
    document.getElementById("dice-second-result").innerHTML = cube2;
}

function getResultDice(a, b) { 
    let sum = a + b;
    if (sum === 7 || sum === 11) {
        return "win";
    } else  {
        return "lose";
    } 
}

//----point try------
// function rollDice() {
    // let cube1 = getRandomInt(1, 6);
    // let cube2 = getRandomInt(1, 6);
    // let sum = cube1 + cube2;
    // let betWin = document.getElementById("bet").value * 2;
    // let bet = document.getElementById("bet").value;
    // let point = getResultPoint(cube1, cube2, rolledPoint);
    // document.getElementById("balance-result").innerHTML = balance + "$";
    // if (getResultDice(cube1, cube2) === "win") {
    //     layout("bet-result");
    //     document.getElementById("result-text").innerHTML = `Вы выграли, и получаете <strong>${betWin}$</strong>`;
    //     balance = balance + betWin;
    //     document.getElementById("balance").innerHTML = balance + "$";
    // } else if (getResultDice(cube1, cube2) === "lose") {
    //     layout("bet-result");
    //     document.getElementById("result-text").innerHTML = `Ваша ставка в <strong>${bet}$</strong> не сыграла`;
    //     balance = balance - bet;
    //     document.getElementById("balance").innerHTML = balance + "$";
    // } else {
    //     layout("bet-point");
    //     document.getElementById("bet-amound").innerHTML = bet + "$";
    //     document.getElementById("point").innerHTML = sum;
    //     document.getElementById("dice-first-point").innerHTML = cube1;
    //     document.getElementById("dice-second-point").innerHTML = cube2;


        //-----------------------
        // rolledPoint === sum;
        // if (rolledPoint) { 
        //     getResultPoint(cube1, cube2, rolledPoint) === getResultDice(cube1, cube2);
        // }

        


        // getResultPoint(cube1, cube2, rolledPoint, balance, bet, betWin);
        //-----------------------
        
        
        // if (point === "lose") {
        //     document.querySelector(".point-txt").innerHTML = `Вы проиграли <strong>${bet}$</strong>`
        //     balance = balance - bet;
        // } else if (point === "win") {
        //     document.querySelector(".point-txt").innerHTML = `Вы выграли <strong>${betWin}$</strong>`
        //     balance = balance + betWin;
        // } else { 
        //     document.getElementById("result-text").innerHTML = `Твое очко - <strong>${sum}</strong> <br> Продолжай бросать`;
        // }
       
        

        // if (sum === 7) {
        //     document.querySelector(".point-txt").innerHTML = `Вы проиграли <strong>${bet}$</strong>`
        //     balance = balance - bet;
        // } else if (sum === sum) {
        //     document.querySelector(".point-txt").innerHTML = `Вы выграли <strong>${betWin}$</strong>`
        //     balance = balance + betWin;
        // }

        // document.getElementById("result-text").innerHTML = `Твое очко - <strong>${sum}</strong> <br> Продолжай бросать`;
//     }
//     document.getElementById("dice-first-result").innerHTML = cube1;
//     document.getElementById("dice-second-result").innerHTML = cube2;
// }


//--------with point---------
// function getResultDice(a, b) { 
//     let sum = a + b;
//     if (sum === 7 || sum === 11) {
//         return "win";
//     } else if (sum === 2 || sum === 8 || sum === 12) {
//         return "lose";
//     } else { 
//         return "point";
//     }
// }

function tryMore() {
    layout("bet-form");
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
