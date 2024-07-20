// Activity - 4

const arr1 = [1, 2, 3, 4, 5];
console.log("\noriginal Array: ", arr1);
// task-1: Use the map method to create a new Array where each number is doubled and log the result.

const task1 = arr1.map((number) => number * 2);
console.log("\ntask:1 - ", task1);

// task-2: Use the filter method to create a new Array with only even numbers and log the result.
const task2 = arr1.filter((number) => number % 2 == 0);
console.log("\ntask:2 - ", task2);

// task-3   : Use the reduce method to calculate the sum of all numbers in the Array and log the result.

const task3 = arr1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log("\ntask:3 - ", task3);
