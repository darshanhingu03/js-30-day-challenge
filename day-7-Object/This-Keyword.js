// Activity-4
// task-1: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

const book = {
  title: "The Power of Habit",
  author: "Charles Duhigg",
  year: 2014,
  getDetails: function () {
    return `${this.title} by ${this.author}`;
  },
};

console.log("task:1: ", book.getDetails());
