let firstNumber;
let operator;
let secondNumber;
let displayValue;
let numberButtons = document.querySelectorAll(".number-button");
let currentDisplay = document.getElementById("current-display");
let oldDisplay = document.getElementById("old-display");
let clearButton = document.getElementById("button-clear");
let deleteButton = document.getElementById("button-delete");
let operatorButtons = document.querySelectorAll(".operator-button");
let equalsButton = document.getElementById("button-equals");

numberButtons.forEach(function(button) {
    button.addEventListener("click", function(){
        appendDisplay(button.textContent);
    });
});

clearButton.addEventListener("click", function(){
    appendDisplay("clear");
})

deleteButton.addEventListener("click", function(){
    appendDisplay("delete");
})

operatorButtons.forEach(function(button) {
    button.addEventListener("click", function(){
        setOperator(button.textContent);
    });
});

equalsButton.addEventListener("click", function(){
    if(oldDisplay.textContent==""){
        return;
    }
    currentDisplay.textContent = operate(oldDisplay.textContent.slice(0,-2), operator, currentDisplay.textContent);
    oldDisplay.textContent = "";
})

function appendDisplay(number){
    if(number == "clear"){
        currentDisplay.textContent = 0;
        oldDisplay.textContent = "";
    }
    else if(number == "delete"){
        currentDisplay.textContent = currentDisplay.textContent.slice(0,-1);
        if(currentDisplay.textContent == ""){
            currentDisplay.textContent = 0;
        }
    }
    else if(currentDisplay.textContent == 0){
        currentDisplay.textContent = number;
    }
    else{
        currentDisplay.textContent += number;
    }
}

function setOperator(operation){
    if(operation == "+"){
        if(oldDisplay.textContent != "" && currentDisplay.textContent != ""){
            currentDisplay.textContent = operate(oldDisplay.textContent.slice(0,-2), operator, currentDisplay.textContent);
            oldDisplay.textContent = "";
        }
        operator = operation;
        oldDisplay.textContent = currentDisplay.textContent + " " + operation;
        currentDisplay.textContent = 0;
    }
    else if (operation == "-"){
        if(oldDisplay.textContent != "" && currentDisplay.textContent != ""){
            currentDisplay.textContent = operate(oldDisplay.textContent.slice(0,-2), operator, currentDisplay.textContent);
            oldDisplay.textContent = "";
        }
        operator = operation;
        oldDisplay.textContent = currentDisplay.textContent + " " + operation;
        currentDisplay.textContent = 0;
    }
    else if (operation == "×"){
        if(oldDisplay.textContent != "" && currentDisplay.textContent != ""){
            currentDisplay.textContent = operate(oldDisplay.textContent.slice(0,-2), operator, currentDisplay.textContent);
            oldDisplay.textContent = "";
        }
        operator = operation;
        oldDisplay.textContent = currentDisplay.textContent + " " + operation;
        currentDisplay.textContent = 0;
    }
    else if (operation == "÷"){
        if(oldDisplay.textContent != "" && currentDisplay.textContent != ""){
            currentDisplay.textContent = operate(oldDisplay.textContent.slice(0,-2), operator, currentDisplay.textContent);
            oldDisplay.textContent = "";
        }
        operator = operation;
        oldDisplay.textContent = currentDisplay.textContent + " " + operation;
        currentDisplay.textContent = 0;
    }
}

function add(a, b){
    let output = (parseFloat(a)+parseFloat(b)).toFixed(2);
    if (output % 1 == 0){
        return parseFloat(a)+parseFloat(b);
    }
    else
    return output;
}

function subtract(a, b){
    let output = (parseFloat(a)-parseFloat(b)).toFixed(2);
    if (output % 1 == 0){
        return parseFloat(a)-parseFloat(b);
    }
    else
    return output;
}

function multiply(a, b){
    let output = (parseFloat(a)*parseFloat(b)).toFixed(2);
    if (output % 1 == 0){
        return parseFloat(a)*parseFloat(b);
    }
    else
    return output;
}

function divide(a, b){
    let output = (parseFloat(a)/parseFloat(b)).toFixed(2);
    if (b == 0){
        appendDisplay("clear");
        alert("Can't divide by 0!");
        return 0;
    }
    else if (output % 1 == 0){
        return parseFloat(a)/parseFloat(b);
    }
    else
    return output;
}

function operate(firstNumber, operator, secondNumber){
    if (operator == '+'){
        return add(firstNumber,secondNumber);
    }
    else if (operator == '-'){
        return subtract(firstNumber,secondNumber);
    }
    else if (operator == '×'){
        return multiply(firstNumber,secondNumber);
    }
    else if (operator == '÷'){
        return divide(firstNumber,secondNumber);
    }
}