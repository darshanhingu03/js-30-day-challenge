//  Activity - 3 Do While loop

// task-1: Write a program to print numbers from 1 to 5 using a do...while loop.
var i = 0;
do {
  i++;
  console.log("task-1: ", i);
} while (i < 5);

// task-2: Write a program to calculate the fectorial number using a do...while loop.

const fectorial = 9;
let init = 0;
var result = 1;

do {
  init++;
  if (!fectorial) {
    console.log("task-2: ", result);
  }
  result *= init;
  if (init === fectorial) {
    console.log("task-2: ", result);
  }
} while (init < fectorial);
