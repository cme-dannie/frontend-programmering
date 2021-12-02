const globalVariable = "Omg I live in the global scope, or do I really?";

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function divide(x, y) {
  return x / y;
}

function multiply(x, y) {
  return x * y;
}

export { globalVariable, add, subtract, divide, multiply };
