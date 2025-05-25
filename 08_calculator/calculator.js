const add = function(...args) {
	return args.reduce((accumulator, num) => accumulator + num, 0);
};

const subtract = function(...args) {
	return args[0] - args[1];
};

const sum = function(arr) {
	return arr.reduce((accumulator, num) => accumulator + num, 0);
};

const multiply = function(arr) {	
  return arr.reduce((accumulator, num) => accumulator * num, 1);
};

const power = function(num, power) {
  let powered = num; // save the value of number to be powered
  for (let i = 1; i < power; i++){
    powered = powered * num;
  }
  return powered;
};

const factorial = function(num) {
  let factorial = 1;

  for (let i = 1; i < num; i++){
    factorial = factorial * (i + 1);
  }
  return factorial;
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
