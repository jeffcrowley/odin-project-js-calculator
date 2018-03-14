//operations
let add = function(num1, num2) { return num1 + num2 }
let subtract = function (num1, num2) { return num1 - num2 }
let multiply = function (num1, num2) { return num1 * num2 }
let divide = function (num1, num2) { return num1 / num2 }

let displayValue = document.querySelector('#displayValue') // actual display number on DOM
let display = displayValue.innerHTML // string
const buttons = document.querySelectorAll('button')

let operate = function(operator, num1, num2) {
   if (num1 === 'Infinity' || num2 === 'Infinity') {
      return 'Infinity'
   }
   switch (operator) {
      case 'ADD':
         return add(num1, num2)
         break
      case 'SUBTRACT':
         return subtract(num1, num2)
         break
      case 'MULTIPLY':
         return multiply(num1, num2)
         break
      case 'DIVIDE':
         return (num2 === 0 ? `Infinity` :  divide(num1, num2))
         break
      default:
         return 'Operator error'
         break
   }
}

// events for clicking on a certain button. MAIN PART OF THE APP.
buttons.forEach((button) => {
   button.addEventListener('click', (e) => {
      console.log(button.id) //debug
      switch (button.id) {
         case 'b1':
            checkForOperator()
            display += '1'
            updateDisplayValue(display)
            break
         case 'b2':
            checkForOperator()
            display += '2'
            updateDisplayValue(display)
            break
         case 'b3':
            checkForOperator()
            display += '3'
            updateDisplayValue(display)
            break
         case 'b4':
            checkForOperator()
            display += '4'
            updateDisplayValue(display)
            break
         case 'b5':
            checkForOperator()
            display += '5'
            updateDisplayValue(display)
            break
         case 'b6':
            checkForOperator()
            display += '6'
            updateDisplayValue(display)
            break
         case 'b7':
            checkForOperator()
            display += '7'
            updateDisplayValue(display)
            break
         case 'b8':
            checkForOperator()
            display += '8'
            updateDisplayValue(display)
            break
         case 'b9':
            checkForOperator()
            display += '9'
            updateDisplayValue(display)
            break
         case 'b0':
            checkForOperator()
            display += '0'
            updateDisplayValue(display)
            break
         case 'clear':
            display = '0'
            currentEquationNumber = 0
            currentOperator = null
            previousOperator = null
            updateDisplayValue(display)
            break
         case 'add':
            operatorEntered('ADD')
            updateDisplayValue(display)
         break
         case 'subtract':
            operatorEntered('SUBTRACT')
            updateDisplayValue(display)
         break
         case 'multiply':
            operatorEntered('MULTIPLY')
            updateDisplayValue(display)
         break
         case 'divide':
            operatorEntered('DIVIDE')
            updateDisplayValue(display)
         break
         case 'equals':
            if (previousOperator) { updateDisplayValue(operate(previousOperator, currentEquationNumber, parseFloat(display))) }
         break
      }
   })
})

// converts current display from string to float
let updateDisplayValue = function(display) {
   displayValue.innerHTML = parseFloat(display)
   console.log(`Current operator: ${currentOperator}`) //debug
   console.log(`Previous operator: ${previousOperator}`) //debug
   console.log(`Current equation number: ${currentEquationNumber}`) //debug
}

// stored first part of equation (default 0)
let currentEquationNumber = 0

// stored operator in use (default undefined)
let currentOperator

// previous operater used in current equation (default undefined)
let previousOperator

// checks if there's already an equation in progress, if yes, it updates the currentEquationNumber. If no, ie: it's the first operator in the equation, it makes a new currentEquationNumber
// there's a check at the beginning that checks if there's stored values in current and previous operators. If yes, it doesn't update any numbers if you hit another operator.
// This prevents calculations from occuring from repeatedly pressing + for example.
let operatorEntered = function(operator) {
   if (currentOperator && previousOperator) {
      currentOperator = operator
   } else {
   currentEquationNumber ? currentEquationNumber = operate(previousOperator, currentEquationNumber, parseFloat(display)) :  currentEquationNumber = parseFloat(display)
   currentOperator = operator
   display = currentEquationNumber
   }
}

// checks and sees if there's a current operator. If there is, it transfers the value to previousOperator, resets it and "resets" the display. This is to enable longer equations (ie: 7 + 3 * 5 / 8, etc.)
let checkForOperator = function () {
   if (currentOperator) {
      previousOperator = currentOperator
      currentOperator = null
      display = '0'
   }
}


