// Activity:1 - Nested Loop

// task-1: write a program to print pattern using nested for loop
const column = 5;

for (let i = 0; i < column; i++) {
  let pattern = "";
  for (let j = 0; j <= i; j++) {
    pattern += "* ";
  }
  console.log(`${pattern}\n`);
}
