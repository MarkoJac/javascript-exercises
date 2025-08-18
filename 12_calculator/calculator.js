const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(Array) {
	return Array.reduce((accumulator, current) => accumulator + current, 0);
};

const multiply = function(Array) {
  return Array.reduce((accumulator, current) => accumulator * current, 1);
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(n) {
  let total = 1;
  if (n === 0) {
    return total = 1;
  } else {
	for (let i = 1; i <= n; i++) {
      total = total * i;
  }
  return total;
}};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
