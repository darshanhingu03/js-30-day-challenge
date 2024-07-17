// Activity- 1

// task-1: Write a functions to check if a number is even or odd  and log the result to the console.

function checkOddEvenNumber(number) {
  if (number % 2 === 0) {
    return `number ${number} is Even`;
  }
  return `number ${number} is Odd`;
}

console.log(`task-1: ${checkOddEvenNumber(1)}\n`);

// task-2: Write a functions to calculate the squre of a number and log the result to the console.

function squre(number) {
  console.log("task-2: ", number * number);
}

squre(10);
