function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if (b==0){
        return "Fool, you cannot divide by zero!";
    }
    return a / b;
}

function power(a, b){
    return Math.pow(a, b);
}

function operate(operator, a, b){
    switch (operator){
        case "+":
            Math.round(add(a, b));
            break;
        case "-":
            Math.round(subtract(a, b));
            break;
        case "*":
            Math.round(multiply(a, b));
            break;
        case "/":
            Math.round(divide(a, b));
            break;
        case "^":
            Math.round(power(a, b));
            break;
    }
}

function display(){

}

function clearAll(){

}

function clear(){

}