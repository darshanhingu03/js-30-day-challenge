// Activity:3

// task:1 Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
  name: "City library",
  books: [
    {
      title: "The Power of Habit",
      author: "Charles Duhigg",
      year: 2014,
    },
    {
      title: "Ego Is the Enemy",
      author: "Ryan Holiday",
      year: 2016,
    },
    {
      title: "Discipline Is Destiny",
      author: "Charles Duhigg",
      year: 2022,
    },
    {
      title: "Mindset Unlocked",
      author: "Cici Castelli",
      year: 2022,
    },
  ],
};

console.log("task:1 ", library);

// task:2 - Access and log the name of the library and the titles of all the books in the library.

console.log("\ntask:2 name - ", library.name);

library.books.forEach((book) => {
  console.log("task:2 Book Title - ", book.title);
});
