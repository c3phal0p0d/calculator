let previousOperand = '';
let currentOperand = '';
let operator = '';
let hasPressedEquals = false;
let isOn = false;

const display = document.getElementById('display');
const onButton = document.getElementById('on');
const clearButton = document.getElementById('clear');
const clearAllButton = document.getElementById('clear-all');
const changeSignButton = document.getElementById('change-sign');
const equalsButton = document.querySelector('.equals');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

clearButton.addEventListener('click', () => clear());
clearAllButton.addEventListener('click', () => clearAll());
changeSignButton.addEventListener('click', () => changeSign());
equalsButton.addEventListener('click', () => equalsButtonAction());
numberButtons.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
);
operatorButtons.forEach((button) =>
    button.addEventListener('click', function(event) {
        setOperator(this.id);
    } 
));

turnOff();

onButton.addEventListener('click', function(event) {
    if (!isOn){
        event.target.style.backgroundColor = '#184e2f';
        turnOn();
    } else {
        event.target.style.backgroundColor = '#1a1a1a';
        turnOff();
    }
});

function turnOn(){
    display.textContent = '0';
    const buttons = document.getElementsByTagName("button");
    for (const button of buttons) {
        if (button.id != 'on'){
            button.disabled = false;
        }
    }
    isOn = true;
}

function turnOff(){
    clearAll();
    display.textContent = '';
    const buttons = document.getElementsByTagName("button");
    for (const button of buttons) {
        if (button.id != 'on'){
            button.disabled = true;
        }
    }
    isOn = false
}

function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    if (b==0){
        alert("Fool, you cannot divide by zero!");
        return 0;
    }
    return a/b;
}

function operate(operator, a, b){
    let result = 0;
    switch (operator){
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
    }
    
    return result * 1;
}

function setOperator(id){
    if (previousOperand != ''){
        returnResult();
    }
    operator = id;
    previousOperand = currentOperand;
    currentOperand = '';
}

function appendNumber(number){
    if (currentOperand.length>=15){
        return;
    }
    if (number == '.' && currentOperand.includes('.')){
        return;
    }
    if (hasPressedEquals && operator == ''){
        previousOperand = currentOperand;
        currentOperand = number;
        hasPressedEquals = false;
    } else {
        currentOperand += number;
    }

    display.textContent = currentOperand;

}

function changeSign(){
    currentOperand = (-Number(currentOperand)).toString();
    display.textContent = currentOperand;
}

function returnResult(){
    if (operator == ''){
        return;
    }
    let result = (operate(operator, Number(previousOperand), Number(currentOperand))).toString();
    if (result.length>=15){
        result = parseFloat(result.slice(0, 15)).toString();
    }
    display.textContent = result;
    currentOperand = result;
    operator = '';
}

function equalsButtonAction(){
    returnResult();
    hasPressedEquals = true;
}

function resetDisplay(){
    currentOperand = '';
    display.textContent = '0';
}

function clearAll(){
    resetDisplay();
    previousOperand = '';
}

function clear(){
    if (currentOperand=='Infinity'){
        resetDisplay();
    }
    else if (currentOperand.length <= 1){
        resetDisplay();
    } else {
        currentOperand = currentOperand.slice(0, -1);
        display.textContent = currentOperand;
    }
}
