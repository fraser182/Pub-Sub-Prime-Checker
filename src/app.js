const FormView = require('./views/form_view.js');
const PrimeNumberChecker = require('./models/prime_number_check.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  //subscribe to primeNumberCheck
  const resultView = new ResultView();
  resultView.bindEvents();

  //subscribe to formView
  const primeNumberCheck = new PrimeNumberChecker();
  primeNumberCheck.bindEvents();


  const formView = new FormView();
  formView.bindEvents();


});
