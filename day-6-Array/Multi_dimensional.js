// Activity - 5

// task-1: create a two-dimensional array (matrix) and log the entire array of the console.
const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const arr = [];
const value = 3;
let count = 1;
let temp = [];

// for (let i = 0; i < value; i++) {
//   for (let j = 0; j < value; j++) {
//     temp.push(count);
//     count++;
//     if (j === value - 1) {
//       arr.push(temp);
//     }
//   }
// }

// console.log("\ntask:1 ", arr);
console.log("\ntask:1 ", array);
// task-2: Access and log a specific  element from the two-dimensional array

const element = array[1][0];
console.log("task:2 - ", element);
