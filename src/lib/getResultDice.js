/* eslint-disable linebreak-style */
function getResultDice(a, b) {
  const sum = a + b;
  if (sum === 7 || sum === 11) {
    return 'win';
  } if (sum === 2 || sum === 8 || sum === 12) {
    return 'lose';
  }
  return 'point';
}

export default getResultDice;
