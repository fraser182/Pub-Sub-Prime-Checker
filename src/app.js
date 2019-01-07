const FormView = require('./views/form_view.js');
const PrimeNumberChecker = require('./models/prime_number_check.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  //subscribe to
  const primeNumberCheck = new PrimeNumberChecker();
  primeNumberCheck.bindEvents();

  const formView = new FormView();
  formView.bindEvents();




});
