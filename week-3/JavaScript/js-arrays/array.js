// How do we create an array?
// Syntax
// [const keyword ALWAYS] [name of variable - Array] = [all our array items]

const students = ["Kenny", "Jay A.","Ben","Roberto","Raf","Jay.Y"];

const newArray = new Array(6).fill("jay");
const newNewArray = [];
console.log(newArray);

// What are Array Indexes?
// Each element in an array has an index which represents the position of that element in this array.

console.log("Kenny:", students[0]);
console.log("last position: ", students[students.length-1]);

// Array Methods
// How to add elements inside an array?

students.push("Remi");

// How to remove last element from an Array?

const fiftyFive = students.pop();

// How to remove first element from an Array?

const firstStudent = students.shift();

// How to add at the beginning of an array?

students.unshift("Dan", "Emily", "Jordan");

// How to check for values inside an array?
console.log(students);
console.log("Index at which Ben is in the array: ", students.indexOf("Ben"));
console.log("Index at which Ben is in the array: ", students.indexOf("Ben"));
console.log(students.has("J"));

// How to check if a value is present in an array?

console.log(students);
console.log(students.includes("Remi"));
console.log(students.includes("Jordan"));
console.log(students.includes("Jordan", 2)); // starts from position 3 (index 3);


