let firstNumber;
let operator;
let secondNumber;
let displayValue;
let numberButtons = document.querySelectorAll(".number-button");
let currentDisplay = document.getElementById("current-display");
let clearButton = document.getElementById("button-clear");
let deleteButton = document.getElementById("button-delete");

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

function appendDisplay(number){
    if(number == "clear"){
        currentDisplay.textContent = 0;
    }
    else if(number == "delete"){
        currentDisplay.textContent = currentDisplay.textContent.slice(0,-1);
        if(currentDisplay.textContent == ""){
            currentDisplay.textContent = 0;
        }
    }
    else if(currentDisplay.textContent == 0){
        currentDisplay.textContent = number;
        console.log('pressed else if'+ number);
    }
    else{
        currentDisplay.textContent += number;
        console.log('pressed '+ number);
    }
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
    return a/b;
}

function operate(firstNumber, operator, secondNumber){
    if (operator == 'add'){
        return add(firstNumber,secondNumber);
    }
    else if (operator == 'subtract'){
        return subtract(firstNumber,secondNumber);
    }
    else if (operator == 'multiply'){
        return multiply(firstNumber,secondNumber);
    }
    else if (operator == 'divide'){
        return divide(firstNumber,secondNumber);
    }
}