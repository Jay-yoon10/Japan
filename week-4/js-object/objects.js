// // What aare objects?
// // why do we use objects?
// // how can we modify objects?
// // how do we access an object's properties and methods?
// // what are classes?

// // Creating an object?
// // Syntax
// // [const] [objectName] =={
//     // keyName1: value1,
//     // keyName2: value2,
//     // etc..
// //}

// // const coach = {
// //     firstName:"Remi",
// //     lastName: "Hoeppe",
// //     age:32,
// //     height: 191,
// // }
// // console.log(coach);

// // Creating an Object with methods
// // How do we write methods?
// // Why do we use methods?

// const student = {
//     firstName : "Nick",
//     lastName: "Cage",
//     age: undefined,
//     browniePoints : 1000,

//     howManyPoints(){
//         console.log(this.browniePoints);
//     },

//     addPoints(points){
//         this.browniePoints += points;
//     },

// }

// console.log(student);
// student.howManyPoints();
// student.addPoints(250);
// console.log(student.browniePoints);

// // Prototype & Parameterizing Object Instantiation.

// // Instantiating an object statically
// const coach = {
//     firstName:"Remi",
//     lastName: "Hoeppe",
//     age:32,
//     height: 191,

//     fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// // Creating obejct using functions

// // Defining a function that takes series of arguments. Each arg is going to be assigned to the value of the matching key for "this" object
// function Coach(firstName, lastName, age, height) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.height = height;

//     this.setFirstName = function(newFirstName){
//         this.firstName = newFirstName;
//     }
// }

// const newCoach = new Coach("Calum", "Hill", 24, 176);

// Coach.prototype.fullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }
// console.log(newCoach);
// console.log(newCoach.fullName());

// class Student {
//     constructor (firstName, beep= "unknown", eep = 99){
//         this.firstName = firstName;
//         this.lastName = beep;
//         this.age = eep;
//     }

//     setAge(updatedAge){
//         this.age = updatedAge
//     }

//     getAge(){
//         console.log(this.age);
//     }
// }

// const Roberto = new Student("Roberto", "F.", 23)
// console.log(Roberto)
// const students = new Student()
// console.log(students)

// // How can we access / read data inside of an object?

// console.log(Roberto); //=> this will print the entire object
// console.log(Roberto.firstName); // => (Dot Notation) this will print the value for the specified key.
// // let string = new String("Something");
// // console.log(string.length);
// console.log(Roberto["age"]) // => [Bracket Notation] this will print the value for the specified key.

// // How to check if a property exists on an object?
// // Object.hasOwnProperty("KeyName") => returns a boolean (true if property exists)
// // a key:Value pair is called a property. key can be called proeprtyName

// const checkIfHasFirstName = (object) =>{
//     return object.hasOwnProperty("firstName");

// }

// console.log(checkIfHasFirstName(Roberto))
// Roberto.firstName = "Rob";
// // adding key:value pair
// Roberto.favClub = "Man. United";

// How do we rename a key inside an object?
// What is Object Destructuring?

const city = {
    name: "Sydney",
    state: "NSW",
    population: 5.3,
    peoplePerSqKm : 442,
}

console.log(city);
const{ peoplePerSqKm, ...otherProps} = city;
// This destructure my object into two sets of props (one set with a single prop of peoplePerSqKm and another of props with all other props)
const sydney = { ...otherProps, density: peoplePerSqKm}
console.log(sydney);
console.log(otherProps); // otherProps is now a global variable that contains all the remainings props

// How can we delete key-value pairs?

// Using the delete keyword
console.log("Before deleting key", sydney);
delete sydney.state; // dot notation
console.log("After deleting key", sydney);

delete sydney["population"]; // bracket notation
console.log("After deleting key", sydney);

// Using the ES6 spread + destructuring syntax approach
const car = {
    color: "red",
    brand: "Ford",
    model: "Mustang",
    year: 1974,
}

console.log(car);
const {color, ...otherProperties} = car;
const newCar ={ ...otherProperties};
console.log(newCar);

// When we destrucutre the original we do not alter its structure. So if any methods inside the original object used keys/value paris we did not want to keep, we are avoiding breaking methods that could rely on them.