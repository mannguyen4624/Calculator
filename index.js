const clearButton = document.getElementById("ac");
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");
const button0 = document.getElementById("zero");
const buttonPeriod = document.getElementById(".");
const plusButton = document.getElementById("+");
const minusButton = document.getElementById("-");
const multiplyButton = document.getElementById("*");
const divideButton = document.getElementById("/");
const calculateButton = document.getElementById("=");
const inputField = document.getElementById("field");

let savedNum = '';
let savedSymbol = '';
let resetNextInput = true;

function addInput(e) {
    const buttonPressed = e.currentTarget.value;
    console.log(resetNextInput)
    if (resetNextInput) {
        clearInput();
        inputField.value = buttonPressed == '.' ? '0' + buttonPressed : buttonPressed;
    } else {
        inputField.value += buttonPressed;
    }
}

function clearInput() {
    inputField.value = '';
    resetNextInput = false;
}

function clearAll() {
    clearInput();
    resetNextInput = true;
    savedNum = '';
    savedSymbol = '';
}


function saveSymbol(e) {
    newSymbol = e.currentTarget.value;
    if (savedSymbol == '') {
        savedNum = parseFloat(inputField.value ? inputField.value : "0");
        savedSymbol = newSymbol;
    } else {
        calculate();
        savedNum = parseFloat(inputField.value ? inputField.value : "0");
        savedSymbol = newSymbol;
    }
    resetNextInput = true;
}

function calculate() {
    if (savedSymbol != '') {
        const currentNum = parseFloat(inputField.value);
        switch (savedSymbol) {
            case "+":
                console.log(`${savedNum} + ${currentNum}`)
                inputField.value = String(savedNum + currentNum);
                break;
            case "-":
                console.log(`${savedNum} - ${currentNum}`)
                inputField.value = String(savedNum - currentNum);
                break;
            case "*":
                console.log(`${savedNum} * ${currentNum}`)
                inputField.value = String(savedNum * currentNum);
                break;
            case "/":
                console.log(`${savedNum} / ${currentNum}`)
                inputField.value = String(savedNum / currentNum);
                break;
        }
        resetNextInput = true;
        savedSymbol = '';
    }
}

clearButton.addEventListener('click', clearAll);
button1.addEventListener('click', addInput);
button2.addEventListener('click', addInput);
button3.addEventListener('click', addInput);
button4.addEventListener('click', addInput);
button5.addEventListener('click', addInput);
button6.addEventListener('click', addInput);
button7.addEventListener('click', addInput);
button8.addEventListener('click', addInput);
button9.addEventListener('click', addInput);
button0.addEventListener('click', addInput);
buttonPeriod.addEventListener('click', addInput);
plusButton.addEventListener('click', saveSymbol);
minusButton.addEventListener('click', saveSymbol);
multiplyButton.addEventListener('click', saveSymbol);
divideButton.addEventListener('click', saveSymbol);
calculateButton.addEventListener('click', calculate);