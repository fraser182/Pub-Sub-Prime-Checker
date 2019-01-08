const PubSub = require ('../helpers/pub_sub.js');

const ResultView = function(){
};


ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeNumber:result-calculated', (event) => {
    const isItPrime = event.detail;
    console.log(`payload received in ResultView`, isItPrime);

    this.displayResult(isItPrime);

  })

}


ResultView.prototype.displayResult = function(result){

  const resultElement = document.querySelector('#result')
  if (result) { // dont need = true, as the if statement defines it
    resultElement.textContent = `This is a Prime Number!`;
  }
    else {
      resultElement.textContent = `This is NOT a Prime Number`;
  }

}

module.exports = ResultView;
