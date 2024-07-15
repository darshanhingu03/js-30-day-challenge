// Activity:3 - Switch-Case Statements

// task-1: Write a program that uses a switch case to determine the week based on a number (1-7) and log the day name to the console.

const day = 2;

switch (day) {
  case 1:
    console.log("task-1: Sunday");
    break;
  case 2:
    console.log("task-1: Monday");
    break;
  case 3:
    console.log("task-1: Tuesday");
    break;
  case 4:
    console.log("task-1: Wednesday");
    break;
  case 5:
    console.log("task-1: Thursday");
    break;
  case 6:
    console.log("task-1: Friday");
    break;

  default:
    console.log("task-1: Saturday");
    break;
}

// task-2: Write a program that uses a switch case to assign a grate ('A','B','C','D','F') based on a score and log the day name to the console.

const score = 90;

switch (true) {
  case score >= 90:
    console.log("task-2: A");
    break;
  case score >= 80:
    console.log("task-2: B");
    break;
  case score >= 60:
    console.log("task-2: C");
    break;
  case score >= 40:
    console.log("task-2: D");
    break;
  default:
    console.log("task-2: F");
    break;
}
