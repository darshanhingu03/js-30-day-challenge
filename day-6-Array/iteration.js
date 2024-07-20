// Activity-4

const array = ["a", "b", "1", 2, true];
// task-1: use a for loop to iterate over the array and log each element to the console.

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log("task:1 element : ", element);
}

// task-2: use a forEach method to iterate over the array and log each element to the console.
console.log("\n");
array.forEach((element) => {
  console.log("task:2 element- ", element);
});
