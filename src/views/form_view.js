const PubSub = require ('../helpers/pub_sub.js')

const FormView = function (){
}; // so we can new up a form view

FormView.prototype.bindEvents = function(){
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputtedNumber = event.target.number.value; //this links to the form in html and the id number
    console.log('inputted number', inputtedNumber);

    PubSub.publish('FormView:number-submitted', inputtedNumber)
  });


}

module.exports = FormView;
