// Activity - 2 While loop

// task-1: Write a program to calculate the sum of Numbers from 1 to 10 using whie loop.

var sum = 0;
var i = 1;
var loopRun = 10;
while (i <= loopRun) {
  sum += i;
  if (i === loopRun) {
    console.log("task:1 - ", sum, "\n");
  }
  i++;
}

// task-2: Write a program to print numbers from 10 to 1 using a while loop.

while (loopRun > 0) {
  console.log("task:2 - ", loopRun);
  loopRun--;
}
