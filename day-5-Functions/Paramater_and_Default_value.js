// Activity: 4

// task-1: write a function that take a two parameters and returns their product. provide a default value for the second parameters

function findProduct(a, b = 4) {
  return a * b;
}

console.log("task:1 ", findProduct(4));

// task-1: write a function that take a person's name and age returns a greeting message provide a default value for the age

function Details(name, age = 22) {
  return `Hello, ${name}! You are ${age} years old.`;
}

console.log("task-2: ", Details("darshan"));
