// Activity - 5

// task-1: write a higher-order function that takes a function and a number, and calls the functions that many times.

const repeatFn = (fnName, times) => {
  for (let i = 1; i <= times; i++) {
    fnName(i);
  }
};

const printValue = (i) => {
  console.log("task:1 called:", i);
};

repeatFn(printValue, 5);

// task-2: write a higher-order function that takes two functions value, applies the first function to the value, and then applies the second function to result.

const applyFn = (f1, f2, value) => {
  return f2(f1(value));
};

const sum = (value) => value + 10;
const subtract = (value) => value * 10;

console.log("task-2: ", applyFn(sum, subtract, 20));
