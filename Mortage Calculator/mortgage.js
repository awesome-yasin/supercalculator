

function init(){

  //Initiliaze calculator blank model
  const calculator = new MortgageCalculatorModel( 0, 0, 0, 0, 0);
  setCalcUIModel(calculator);

  //Update entire model from UI
  updateModelFromUI();
  setUIEvents();

}


function setUIEvents(){


  const formElem = document.getElementById('form_mortgage_calc');
  const btn  = document.getElementById('btn_calculate');
  const sliderYearsMortgage = document.getElementById('yearsOfMortgage');
  const sliderInterestRate = document.getElementById('interestRate');
  const inYears = document.getElementById('inYears');
  const inInterestRate = document.getElementById('inInterestRate');
  const loanAmount = document.getElementById('loanAmount');
  const annualTax = document.getElementById('annualTax');
  const annualInsurance = document.getElementById('annualInsurance');
  const loanAmountErrMsg = document.getElementById('loanAmount-validity');
  const annualTaxErrMsg = document.getElementById('annualTax-validity');
  const annualInsuranceErrMsg = document.getElementById('annualInsurance-validity');


  //Initial UI values for disabled text
  inYears.value = sliderYearsMortgage.value;
  inInterestRate.value  = sliderInterestRate.value;

  // Initial value for error messages
  getErrorMessagesForScreenSize();

  btn.addEventListener('click', buttonObserver );

  // Events for sliders
  sliderYearsMortgage.addEventListener('input',
    function (evt) {
     setInputFromSliderValue( evt.target ,'inYears') ;
     chromeSliderStyling( evt.target );
  });

  sliderInterestRate.addEventListener('input',
    function(evt) {
      setInputFromSliderValue( evt.target ,'inInterestRate');
      chromeSliderStyling( evt.target );
  });

  //Events for input numeric text
  loanAmount.addEventListener("keypress", validateOnlyNumericKeys);
  loanAmount.addEventListener('input',
    function(evt) {
      validateNumberInputText( evt, loanAmountErrMsg, evt.target.dataset.requiredErrorMsg );
  } );

  annualTax.addEventListener("keypress", validateOnlyNumericKeys);
  annualTax.addEventListener('input',
    function (evt) {
    validateNumberInputText(evt, annualTaxErrMsg, evt.target.dataset.requiredErrorMsg );
  });

  annualInsurance.addEventListener("keypress", validateOnlyNumericKeys);
  annualInsurance.addEventListener('input',
    function (evt) {
    validateNumberInputText(evt, annualInsuranceErrMsg, evt.target.dataset.requiredErrorMsg );
  });

  // Focus box shadow when writing
  loanAmount.addEventListener('focus',
    function ( evt ) {
    setFocusBoxShadow(evt.target, 4);
  });

  loanAmount.addEventListener('blur',
    function ( evt ) {
    setFocusBoxShadow(evt.target, 0);
  });

  annualTax.addEventListener('focus',
    function ( evt ) {
    setFocusBoxShadow(evt.target, 4);
  });

  annualTax.addEventListener('blur',
    function ( evt ) {
    setFocusBoxShadow(evt.target, 0);
  });

  annualInsurance.addEventListener('focus',
    function ( evt ) {
    setFocusBoxShadow(evt.target, 4);
  });

  annualInsurance.addEventListener('blur',
    function ( evt ) {
    setFocusBoxShadow(evt.target, 0);
  });


  //Observe changes on screen size using media queries. Listening if screen size changes
  //from Desktop to mobile/tablet
  const mediaQuery = window.matchMedia(getMediaQueryNotDesktopStr());
  const resultsElem = document.getElementById('results');

  mediaQuery.addListener(
    function(e){
      if(e.matches){
        
        
        resultsElem.className = 'resultsMobile';

      }else{
        resultsElem.className = 'resultsDesktop';
        resultsElem.style.padding = '35px 40px 34px 40px';

        
      }

      //Reset error messages labels
      getErrorMessagesForScreenSize();

  });

}

// Adjust error messages for required input numeric text according
// the screen size
function getErrorMessagesForScreenSize(){
  const loanAmount = document.getElementById('loanAmount');
  const annualTax = document.getElementById('annualTax');
  const annualInsurance = document.getElementById('annualInsurance');

  let loanAmountErrMsgStr = annualTaxErrMsgStr = annualInsuranceErrMsgStr = 'Mandatory field';

  if ( !screenSizeIsNotDesktop() === true ) {
    loanAmountErrMsgStr = 'Loan Amount is mandatory';
    annualTaxErrMsgStr = 'Annual Tax is mandatory';
    annualInsuranceErrMsgStr = 'Annual Insurance is mandatory';
  }

  loanAmount.dataset.requiredErrorMsg = loanAmountErrMsgStr;
  annualTax.dataset.requiredErrorMsg = annualTaxErrMsgStr;
  annualInsurance.dataset.requiredErrorMsg = annualInsuranceErrMsgStr;
}

function getMediaQueryNotDesktopStr(){
  return 'screen and  (max-width: 799px)'; 
}

//Screen is mobile/tablet size?
function screenSizeIsNotDesktop(){
 return window.matchMedia(getMediaQueryNotDesktopStr()).matches;
}

function setFocusBoxShadow(elem, shadowPx){
  const inputTextMask = elem.parentNode;
  inputTextMask.style.boxShadow = '0 0 '+ shadowPx +'px rgba(62, 61, 63, 0.62)';
}

// Cross-browser JS function to validate only numeric input
function validateOnlyNumericKeys( evt ){
   const theEvent = evt || $window.event;
   let key = theEvent.keyCode || theEvent.which;
   const BACKSPACE = 8,  DEL = 46,  ARROW_KEYS = {left: 37, right: 39};
   const regex = /[0-9]|\./;

   if (key === BACKSPACE || key === DEL || key === ARROW_KEYS.left || key === ARROW_KEYS.right) { return true; }

  // Handle paste
  if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
  } else {
    key = theEvent.keyCode || theEvent.which;
  // Handle key press
    key = String.fromCharCode(key);
  }
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
  return true;
}

function formFieldIsValid(formElem, fnError, fnOk ){
  const isValid = formElem.checkValidity();
  !isValid ? fnError.call() : fnOk.call();
  return isValid;
}

//Check validity of a numeric input text. If invalid displays error msg
function validateNumberInputText (evt, errLabel, errorMsg){

  updateModelFromUIElem(evt.target);
  formFieldIsValid(evt.target,
    function () {
        errLabel.className = 'fieldIsEmpty';
        errLabel.innerHTML = errorMsg;
    },
    function () {
      errLabel.className = '';
      errLabel.innerHTML = '';
    }
  );

}

//Check if current browser is Webkit based excluding Edge, then apply
//effects to Chrome slider to color the progress of the thumb
function chromeSliderStyling(slider){
  const webkitSafariStrQuery =  'screen and (-webkit-min-device-pixel-ratio:0)';
  const isWebkit = window.matchMedia(webkitSafariStrQuery).matches;

  if(isWebkit && !CSS.supports('-ms-accelerator', true) 
  && !CSS.supports('-ms-ime-align', 'auto') 
  && !CSS.supports('-moz-appearance', 'none')
  ){
    const percentSlider = ( slider.value / slider.max ) * 100;
    slider.style.background = 'linear-gradient(to right, #32de17 0%, #1091cc '+percentSlider + '%, #cacaca ' +percentSlider + '%, #cacaca 100%)' ;

  }
}

//Calculate Button function when clicked
function buttonObserver(evt){
  const results = getCalcUIModel().getResults();
  const thisBtn = evt.target;

  //UI Validation

  if( !isFormValid() ){
    return false;
  }

  updateResultUIPanel(results);

// Recalculate effect
  if( thisBtn.dataset.recalculate == 'false' ){
    thisBtn.dataset.recalculate = 'true';
    thisBtn.innerHTML = "RECALCULATE";
  } else {
  }
}

//Check if the entire form is valid
function isFormValid(){
  const frmElems = document.querySelectorAll('#form_mortgage_calc input.currency-text[required]');
  let i; isNotValid = false;
  for(i=0; i < frmElems.length; i++ ){
    const elemF = frmElems[i];
    if(!elemF.checkValidity()){
      isNotValid = true;
      break;
    }
  }

  return !isNotValid;
}

//Update the result panel with the computed values
function updateResultUIPanel(results){
  const resultsElem = document.getElementById('results');

  if( screenSizeIsNotDesktop() ){//If mobile show result box. Animation should be here too

    // Sets growing size effect features
    resultsElem.style.transition = 'all .2s ease-in-out';

    // Perform Animation here by using padding to simulate sliding/scrolling effect
    resultsElem.style.padding = '451px 12px 26px 20px';

  }else{
    resultsElem.style.padding = '35px 40px 34px 40px';

  }

  const principleInterest = document.getElementById('resultPrincipleAndInterest');
  const resultTax = document.getElementById('resultTax');
  const resultInsurance = document.getElementById('resultInsurance');
  const resultTotalMPayment = document.getElementById('resultTotalMPayment');

  principleInterest.innerHTML = results.principleInterest;
  resultTax.innerHTML = results.tax;
  resultInsurance.innerHTML = results.annualInsurance;
  resultTotalMPayment.innerHTML = results.monthlyPayment;

  switchClassNameResultsNumbers('resultNumber', 'resultNumberPostCalculation');
}

//Get calculator model
function getCalcUIModel(){
  return document.getElementById("form_mortgage_calc").model;
}

function setCalcUIModel(model){
  const frm = document.getElementById("form_mortgage_calc");
  frm.model = model;
}

function switchClassNameResultsNumbers(classSearch, classReplace){
  const cssQuery = '#results .' + classSearch;
  const resultDOMElems = document.querySelectorAll(cssQuery);
  let i=0;
  for(i=0; i < resultDOMElems.length; i++){
    const elem = resultDOMElems[i];
    elem.className  = classReplace;
  }

}

function updateModelFromUIElem(UIElem){
  const model = getCalcUIModel();
  model.hasOwnProperty(UIElem.id) ? model[UIElem.id] = UIElem.value : '';
  setCalcUIModel(model);
}

function updateModelFromUI(){
  const model = getCalcUIModel();
  const properties = Object.getOwnPropertyNames(model);
  properties.map(
    function ( propName ) {
      updateModelFromUIElem(document.getElementById(propName));
  } );
}


function setInputFromSliderValue( slider, inputElemDOMId ){
  const inputElem = document.getElementById(inputElemDOMId);
  inputElem.value = slider.value;
  updateModelFromUIElem(slider);
}

// Definition of MortgageCalculatorModel prototype object and methods
function MortgageCalculatorModel( _interestRate, _loanAmount , _yearsOfMortgage, _annualTax, _annualInsurance ){
  this.interestRate = _interestRate;
  this.loanAmount = _loanAmount;
  this.yearsOfMortgage = _yearsOfMortgage;
  this.annualTax = _annualTax;
  this.annualInsurance = _annualInsurance;
}

MortgageCalculatorModel.prototype.computePrincipleInterest = function(){
  return (( this.interestRate/100 )/12) * this.loanAmount/( 1 - Math.pow(( 1 + (( this.interestRate / 100 ) / 12  )), -this.yearsOfMortgage * 12 ));
}

MortgageCalculatorModel.prototype.computeTax =  function(){
  return this.annualTax/12;
}

MortgageCalculatorModel.prototype.computeInsurance = function(){
  return this.annualInsurance/12;
}

MortgageCalculatorModel.prototype.computeMonthlyPayment = function(){
  return this.computePrincipleInterest() + this.computeTax() + this.computeInsurance();
}

MortgageCalculatorModel.prototype.getResults = function(){
  return {
    tax: this.computeTax().toFixed(2),
    annualInsurance: this.computeInsurance().toFixed(2),
    principleInterest: this.computePrincipleInterest().toFixed(2),
    monthlyPayment: this.computeMonthlyPayment().toFixed(2)
  };
}

//Init event
document.addEventListener('DOMContentLoaded', init, false);
