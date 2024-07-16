// Activity: 5 - Combaining_Condition

// task: 1 - write a program to check if a leap year  using multiple condititons (division by 4, but not 100 unless also divisible by 400) and log the result to the console.

const year = 2023;

if ((year % 400 == 0 || year % 100 !== 0) && year % 4 == 0) {
  console.log(`task:1 ${year} is Leap Year:`);
} else {
  console.log(`task:1 ${year} is Not Leap Year: `);
}
