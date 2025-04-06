//Decalration of the initial variable for currentindex, opertions (+, -, / & *)
//and variable to store the first input
let currentIndex = "";
let operation = "";
let firstNumber = null;
// code to display content on the textBox
const display = document.getElementById("textBox");
function appendToDisplay(value) {
  currentIndex += value;
  display.value = currentIndex;
}
// function to clear display
function clearToDisplay() {
  display.value = "";
  currentIndex = "";
  firstNumber = null;
  operation = "";
}
//code to perform operation
function performOperation(operate) {
  if (currentIndex === " ") return;

  firstNumber = parseFloat(currentIndex);
  operation = operate;
  currentIndex = "";
}
// code to calculate result
let result = "";
function calculateResult() {
  let secondNumber = parseFloat(currentIndex); //store the second input in the second number
  if (operation === "addition") {
    result = firstNumber + secondNumber;
  } else if (operation === "multiply") {
    result = firstNumber * secondNumber;
  } else if (operation === "substract") {
    result = firstNumber - secondNumber;
  } else if (operation === "divide") {
    result = secondNumber !== 0 ? firstNumber / secondNumber : "Error";
  } else {
    result = "Invalid Input";
  }
  display.value = result;
  currentIndex = result.toString(); //to alow further calculations
  operation = "";
}
