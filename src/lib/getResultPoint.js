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

export default getResultPoint;