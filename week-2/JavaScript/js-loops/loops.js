// FOR loops
// Syntax

// [for keyword] [loops params: start; finish; iteration "method"]{
// Code to execute on each iteration 
//}

for (let i = 0; i < 5; i++){
    console.log("asd",i)
}
for (let i = 0; i > 0; ++i){
    console.log("asd",i)
}

const limitLoop=(n) => {
    let sum = 0;
    for (let i=0; i <=n ; i++){
        
        console.log(`looping : ${i}`);
        sum += i;
    }
    return sum;
}
console.log(limitLoop(10));

const coaches =["Calum", "Aidan", "Remi"];
for (let index = 0; index < coaches.length; index++){
    console.log(`Hello ${coaches[index]}`);
}

// How to create new arrays from old arrays using for loops?

const upperCasedCoaches = [];
console.log(upperCasedCoaches)

for (let index = 0; index < coaches.length; ++index){
    upperCasedCoaches.push(coaches[index].toUpperCase());

}

const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17];

const numbersToPwOfThemSelves= (array) =>{
const newArray = [];
for (let index = 0; index < array.length; ++index){
    newArray.push(array[index] ** array[index]);
}
return newArray;
};

const students = ["Kenny", "Jay A", "Raf"];
const reversedStudents =[];

for (let index = students.length-1; index >=0; --index){
    reversedStudents.push(students[index])
    console.log(`Index is ${index}`);
}

console.log("Reversed Student List:", reversedStudents)

// How do we exit our for loop

const names = ["Dan", "Tom", "Joe","Tom"];
const nameToFind = "Tom";
let hasBeenFound = false;

// for (let i = 0; i < names.length; ++i){
//     if(names[i] === nameToFind){
//         console.log(names.count(i));
//         hasBeenFound = true;
        
        
//     }
// }
if(hasBeenFound){
    console.log(`${nameToFind} was found in names array`);
} else{
    console.log(`${nameToFind} was NOT found in names array`);
}

let myString = "This is a sentence. This is an other sentence";

let count = 0;

const vowels = ["a", "e","i","o","u"];
// I want to count the numbers of consonants.
for (let i = 0; i <myString.length;++i){
    const char = myString.charAt(i);

    if (vowels.includes(char) || char === " "){
        continue;
    }
    if (char === "."){
        break;
    }
    // count+=1;
    count++;
}
console.log(count);

// While Loops
// Why do we use while loops?
// >>
// How do we write while loops?

// let i = Math.ceil(Math.random() *10);
// console.log(i);
// let counter = 0;
//Syntax
// [while] (condition) {
//   body of the for loop / code to be excuted when condition is true
//}

// We need initailise our iterator outside the while
// We need to iterate inside the body while loop

// while (i !==5){
//     console.log(`${i} is not 5`)
//     i = Math.ceil(Math.random() *10);
//     counter++;
// }

// console.log(counter);

// while (i>6 && i<0){
//     console.log(`${i} is not 5`)
//     i = Math.ceil(Math.random() *10);
//     counter++;
// }

let input = [1, 2, 3];
let output = new Array(3).fill(0);
let index2 = input.length - 1;
let newIndex= 0;

while (index2 >=0){
    output[index2] = input[index2];
    index2--;
    newIndex++;
}
console.log[output];