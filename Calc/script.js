let display = document.getElementById("display");
let expression = "";

function appendToDisplay(value) {
  expression += value;
  display.value = expression;
}

function clearDisplay() {
  expression = "";
  display.value = "";
}

function deleteLast() {
  expression = expression.slice(0, -1);
  display.value = expression;
}

function calculate() {
  try {
    let result = eval(expression);
    display.value = result;
    expression = result.toString();
  } catch (error) {
    display.value = "Error";
    expression = "";
  }
}

function percent() {
  try {
    let value = parseFloat(expression) / 100;
    display.value = value.toString();
    expression = value.toString();
  } catch (error) {
    display.value = "Error";
    expression = "";
  }
}
