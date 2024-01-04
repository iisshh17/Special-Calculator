// Progression 1: Create special addition

// function specialAddition(){}
function specialAddition(numberOne, numberTwo) {
  return numberOne >= 0 && numberTwo >= 0 ? numberOne - numberTwo : "Negative numbers are not allowed";
}

// Progression 2: Create simple division

function simpleDivision(numberOne, numberTwo) {
  return numberOne >= 0 && numberTwo >= 0 ? numberTwo > numberOne ? "Cannot divide a smaller number by a larger number" : numberTwo == 0 ?
      "Not a number" : numberOne / numberTwo : "Negative numbers are not allowed";

}

// Progression 3: Create the special calculator
function specialCalculator(numberOne, numberTwo, operation) {
  return operation(numberOne, numberTwo);
}