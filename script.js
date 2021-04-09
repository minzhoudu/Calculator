class Calculator {
  constructor(prevOperandTextElement, currOperandTextElement) {
    this.prevOperandTextElement = prevOperandTextElement;
    this.currOperandTextElement = currOperandTextElement;
    this.clear();
  }
  //clears all
  clear() {
    this.currOperand = "";
    this.prevOperand = "";
    this.operation - undefined;
  }

  //deletes last added number
  delete() {}

  //adds a number on a screen
  appendNumber(number) {
    if (number === "." && this.currOperand.includes(".")) return;
    this.currOperand = this.currOperand.toString() + number.toString();
  }

  //executes an operation
  chooseOperation(operation) {
    if (this.currOperand === "") return;
    if (this.prevOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.prevOperand = this.currOperand;
    this.currOperand = "";
  }

  //takes our values and computes a single value that we display
  compute() {}

  //updates values inside our output
  updateDisplay() {
    this.currOperandTextElement.innerText = this.currOperand;
    this.prevOperandTextElement.innerText = this.prevOperand;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const prevOperandTextElement = document.querySelector("[data-prev-operand]");
const currOperandTextElement = document.querySelector("[data-curr-operand]");

const calculator = new Calculator(
  prevOperandTextElement,
  currOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});
