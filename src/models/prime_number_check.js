const PubSub = require('../helpers/pub_sub.js')

const PrimeNumberChecker = function(){
};


PrimeNumberChecker.prototype.bindEvents = function(){
  // Subscribe
  PubSub.subscribe('FormView:number-submitted', (event) => {

    const inputtedNumber = event.detail;
    // console.log('payload received in PrimeNumberCheck', inputtedNumber);
    const result = this.primeCheck(inputtedNumber)
    PubSub.publish('PrimeNumber:result-calculated', result)

  })

}

// checks to see if the number is prime
PrimeNumberChecker.prototype.primeCheck = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

module.exports = PrimeNumberChecker;
