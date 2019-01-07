const PubSub = require('../helpers/pub_sub.js');

const FormView = function(){

};

FormView.prototype.bindEvents = function(){
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputtedNumber = event.target.number.value;
    PubSub.publish('FormView:text-submitted', inputtedNumber)
  })
}

module.exports = FormView;