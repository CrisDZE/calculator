const calculator = document.getElementById('calculator')

const calculatorScreen = document.getElementById('calculatorScreen')

const mathOperators = document.getElementById('mathOperators')
const addButton = document.getElementById('addButton')
const subtractButton = document.getElementById('subtractButton')
const multiplyButton = document.getElementById('multiplyButton')
const divideButton = document.getElementById('divideButton')
const equalButton = document.getElementById('equalButton')

const numbers = document.getElementById('numbers')
const zeroButton = document.getElementById('zeroButton')
const oneButton = document.getElementById('oneButton')
const twoButton = document.getElementById('twoButton')
const threeButton = document.getElementById('threeButton')
const fourButton = document.getElementById('fourButton')
const fiveButton = document.getElementById('fiveButton')
const sixButton = document.getElementById('sixButton')
const sevenButton = document.getElementById('sevenButton')
const eightButton = document.getElementById('eightButton')
const nineButton = document.getElementById('nineButton')

const specialCommands = document.getElementById('specialCommands')
const clearErrorButton = document.getElementById('clearErrorButton')
const clearButton = document.getElementById('clearButton')

const testButton = document.getElementById('testButton')

//saves the commands in an array to make the calcs when use equalButton
let actualCalculation = []

//mathOperators buttons adding the operator selected in the array
// and shows it
addButton.addEventListener('click',function(){
    actualCalculation.push('+');
    showCalculation()
});

subtractButton.addEventListener('click',function(){
    actualCalculation.push('-');
    showCalculation()
});

multiplyButton.addEventListener('click',function(){
    actualCalculation.push('*');
    showCalculation()
});

divideButton.addEventListener('click',function(){
    actualCalculation.push('/');
    showCalculation()
});


//CHECH AND REPAIR
//THIS BUTTON SHOULD SHOW THE RESULT IN THE SCREEN
//NOT ADD THE SYMBOL = IN THE ARRAY
equalButton.addEventListener('click',function(){
    actualCalculation.push('=');
    showCalculation()
});
//---------------------------------------------------------
//---------------------------------------------------------


//numbers buttons adding the number selected in the array and shows it
zeroButton.addEventListener('click',function(){
    actualCalculation.push('0');
    showCalculation()
});

oneButton.addEventListener('click',function(){
    actualCalculation.push('1');
    showCalculation()
});

twoButton.addEventListener('click',function(){
    actualCalculation.push('2');
    showCalculation()
});

threeButton.addEventListener('click',function(){
    actualCalculation.push('3');
    showCalculation()
});

fourButton.addEventListener('click',function(){
    actualCalculation.push('4');
    showCalculation()
});

fiveButton.addEventListener('click',function(){
    actualCalculation.push('5');
    showCalculation()
});

sixButton.addEventListener('click',function(){
    actualCalculation.push('6');
    showCalculation()
});

sevenButton.addEventListener('click',function(){
    actualCalculation.push('7');
    showCalculation()
});

eightButton.addEventListener('click',function(){
    actualCalculation.push('8');
    showCalculation()
});

nineButton.addEventListener('click',function(){
    actualCalculation.push('9');
    showCalculation()
});

//specialCommands deleting the last symbol or all the array and shows it
clearErrorButton.addEventListener('click',function(){
    actualCalculation.pop();
    showCalculation()
});

clearButton.addEventListener('click',function(){
    actualCalculation = [];
    showCalculation()
});

//transform the actualCalculation array in a string and 
//shows it in calculatorScreen div
function showCalculation(){
    let actualCalculationString = actualCalculation.join('');
    calculatorScreen.textContent = actualCalculationString;
}






//TEST BUTTON
//---------------------------------------------------------
//---------------------------------------------------------
testButton.addEventListener('click',function(){
    console.log(actualCalculation);
});
//---------------------------------------------------------
//---------------------------------------------------------
