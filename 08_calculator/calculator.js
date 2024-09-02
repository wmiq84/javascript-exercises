const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
  return numOne - numTwo;
};

const sum = function(array) {
  return array.reduce((sum, current) => current + sum, 0);
};

const multiply = function(array) {
  return array.reduce((sum, current) => current * sum, 1);
};

const power = function(numOne, numTwo) {
	return numOne ** numTwo;
};

const factorial = function(n) {
  if (n == 0) return 1;
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
