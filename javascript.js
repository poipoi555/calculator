function add(a, b) {
    const numA = Number(a);
    const numB = Number(b);
    return numA + numB;
}

function subtract(a, b) {
    const numA = Number(a);
    const numB = Number(b);
    return numA - numB;
}

function multiply(a, b) {
    const numA = Number(a);
    const numB = Number(b);
    return numA * numB;
}


function divide(a, b) {
    const numA = Number(a);
    const numB = Number(b);
    return numA / numB;
}

function operate(operator, a, b) {
    if (operator.trim() === "+") {
        return add(a, b);
    }
    else if (operator.trim() === "-") {
        return subtract(a, b);
    }
    else if (operator.trim() === "×") {
        return multiply(a, b);
    }
    else if (operator.trim() === "÷") {
        return divide(a, b);
    }
}

const numButtons = document.querySelectorAll("button");
numButtons.forEach((button) => {
    button.addEventListener("click", clicked);
});

const operators = ['+', '-', '×', '÷'];

// array of inputted elements
let arr = [];

function clicked(event) {
    const buttonClicked = event.target;
    const eventTextContent = buttonClicked.textContent;
    const display = document.querySelector(".display");

    if (eventTextContent === "Clear") {
        display.textContent = "";
        // even after its cleared, its still in the array --> need to clean the array 
        arr = [];
    }
    // when press = : clear array & put the result in the first part of array
    else if (eventTextContent === "=") {
        let arrOp = [];
        let currNum = "";
        for (let i = 0; i < arr.length; i++) {
            // if arr[i] is a number
            if (!(operators.includes(arr[i]))) {
                currNum += arr[i];
                if (i === arr.length - 1) {
                    arrOp.push(currNum);
                }
            }
            // if arr[i] is an operator
            else {
                arrOp.push(currNum);
                arrOp.push(arr[i]);
                currNum = "";
            }
        }
        const result = operate(arrOp[1], arrOp[0], arrOp[2]) + " ";
        arr = [];
        arrOp = [];
        currNum = "";
        arr.push(result);
        display.textContent = result;
    }
    else {
        // if next input is not a 
        display.textContent += eventTextContent + " ";
        arr.push(eventTextContent);
    }  
    
}

/*
for (let i = 0; i < arr.length; i++) {
                let currNum = arr[i];
                if (!operators.includes(arr[i + 1]) ) {
                    
                }
            }*/

