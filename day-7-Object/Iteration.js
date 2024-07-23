// Acitivity -5
//  task:1 - Use a for...in loop to iterate over the properties of the book object and log each property and its value.

const book = {
  title: "The Power of Habit",
  author: "Charles Duhigg",
  year: 2014,
};

for (const property in book) {
  if (book.hasOwnProperty(property)) {
    console.log(`${property}: ${book[property]}`);
  }
}
// task:2 - Use object.keys and object.values methods to log all the keys and values of the book object.

const keys = Object.keys(book);
console.log("Keys:", keys);

const values = Object.values(book);
console.log("Values:", values);
