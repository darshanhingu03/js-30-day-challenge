// Activity-2

const book = {
  title: "The Power of Habit",
  author: "Charles Duhigg",
  year: 2014,
  getDetails: function () {
    return `${this.title} by ${this.author}`;
  },
};

console.log("Object: ", book);
// task-1: Add a method book object that returns a string with book's title and author and log the result of calling this method.

console.log("\ntask-1: ", book.getDetails());

// task-2:Add a method book object that takes parameter(year) and updates the book's year property, then log the updated object.

book.year = 2015;
console.log("\ntask-2: ", book);
