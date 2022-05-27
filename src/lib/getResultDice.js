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

export default getResultDice;