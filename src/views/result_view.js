const PubSub = require ('../helpers/pub_sub.js');

const ResultView = function(){
};


ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeNumber:result-calculated', (event) => {
    const isItPrime = event.detail;
    console.log(`payload received in ResultView`, isItPrime);
    

  })

};

module.exports = ResultView;
