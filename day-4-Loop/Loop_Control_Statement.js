// Activity - 5 : Loop control statement

// task-1 : write a program to print number from 1 to 10, but skip the number 5 using the continue statement.

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log("task-1: ", i);
}

console.log("\n");

// task-2 : write a program to print number from 1 to 10, but stop the number 7 using the break statement.

for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log("task-2: ", i);
}
