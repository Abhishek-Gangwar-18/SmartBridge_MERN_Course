console.log(" ");

// Task 1: Check if age is 18 or more
console.log("Task: 1");
let age = 25;
let isAdult = (age >= 18) ? true : false;
console.log(`Is the person an adult? ${isAdult}`);

console.log(" ");

// Task 2: Perform operations on x and y
console.log("Task: 2");
let x = 10;
let y = 5;
let addition = x + y;
let multiplication = x * y;
let modulus = x % y;
console.log(`Addition:- ${addition}`);
console.log(`Multiplication:- ${multiplication}`);
console.log(`Modulus:- ${modulus}`);

console.log(" ");

// Task 3: Check if a number is even or odd
console.log("Task: 3");
let n = 7;
let result = (n % 2 === 0) ? "Even" : "Odd";
console.log(`The number ${n} is ${result}`);

console.log(" ");

// Task 4: Store numbers from 1 to 5 in an array
console.log("Task: 4");
let numbersArray = [];
for (let i = 1; i <= 5; i++) {
  numbersArray.push(i);
}
console.log("Numbers from 1 to 5:-", numbersArray);

console.log(" ");

// Task 5: Function to square a number
console.log("Task: 5");
function square(num) {
  return num * num;
}
console.log(`The square of 12 is ${square(12)}`);

console.log(" ");