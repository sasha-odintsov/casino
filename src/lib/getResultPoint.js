/* eslint-disable linebreak-style */
function getResultPoint(a, b, point) {
  const sum = a + b;
  if (sum === 7) {
    return 'lose';
  } if (sum === point) {
    return 'win';
  }
  return 'point';
}

export default getResultPoint;
