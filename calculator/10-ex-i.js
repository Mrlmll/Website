let calculation = localStorage.getItem('result') || '';
const display = document.querySelector('.js-display');
display.value = calculation;

function updateCalculation(input) {
  calculation += input;
  display.value = calculation;
  localStorage.setItem('result', calculation);
}



