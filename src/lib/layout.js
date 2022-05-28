/* eslint-disable linebreak-style */
function layout(element) {
  document
    .querySelectorAll('section')
    .forEach((section => section.style.display = 'none'));
  document.getElementById(element).style.display = 'block';
}

export default layout;
