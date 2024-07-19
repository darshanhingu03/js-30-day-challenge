// Activity: 3

// task-1: write a arrow function to calculate the sum of two numbers and log the result to the console.

const sum = (a, b) => {
  return a + b;
};

console.log("task:1 - ", sum(12, 12));

// task-2: write a arrow function to check if a string contains a specific characters and result a boolean value.

const isString = (string) => {
  const regex = /^[a-zA-Z!@#$%^&*(),.?":{}|<>]*$/;
  return regex.test(string);
};

console.log("task:2 - ", isString("daS@"));
