// Activity:2

// task-1: write a function expression to find the maximum of two numbers and log the result to the console.

const maxnumber = function (a, b) {
  const maxNum = a > b ? a : b;
  return maxNum;
};

console.log(`task-1: max number is a ${maxnumber(50, 115)}`);

// task-2: write a function expression to check if a string concatenate a specific character and log the result to the console.

const concatenateString = function (s1, s2) {
  return s1 + s2;
};

console.log("task:2 - ", concatenateString("hello", "!"));
