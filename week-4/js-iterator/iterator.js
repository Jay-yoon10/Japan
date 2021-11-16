// (("ba" + + "a") + "a").toLowerCase();
// const arr =new Array(2).fill(null);
// console.log(`Aspi${arr.pop() ?? "ra"}tions`)
// // const source = [1,2,3,4,5]
// // const dest = [];

const firstName =['A','i','d','e','n']
let i = 0;
let bytesum = 0;

while (i++ <firstName.length){
    bytesum += firstName.charCodeAt(i);

    
}
console.log(firstName.length)
;
console.log(bytesum)

// // for (let i= 0; i < source.length; ++i){
// //     const current = source[i] + 3;
// //     if (current % 2 === 0){
// //         dest.push(current);
// //     }
   
// // }
// const dest = source.map((n, index)=> (index+3)%2)
// console.log("dest", dest);
// // What's the difference between loops and iterators?
// // Why do we use iterators? DRY - Maintainabiltiy
// // How to use iterators?
// const check = false;

// if (!true === check){
//      myValue =123;
// }
// 7 =='7'
// console.log(myValue);
// const numbers = [1, 2, 3, 4, 5];
// const numbers2= numbers.reverse().map((n)=>n-2);
// console.log(numbers2)
// const incremented = [];
// for (let i = 0; i < numbers.length; i++){
//     incremented.push(numbers[i] + 1);
// }

// console.log("Incrementing with for loop", incremented);

// const squared = [];
// for (let i = 0; i < numbers.length; i++){
//     squared.push(numbers[i] + 2);
// }
// console.log ("Squaring with for loop", squared); 

// // The map() iterator
// // when do we use map()?
// // when I want a new array of the same length as the original

// // What is a callback function?
// //
// const myMap = (array, callback) =>{
//     const newArray = [];
//     for (let i = 0; i < array.length; ++i){
//         const currentItem = array[i]
//         const newValue = callback(currentItem)
//         newArray.push(newValue);
//     }
//     return newArray;
// }

// const increment = (n) => n + 1;
// console.log("Incrementing with myMap", myMap(numbers, increment ));

// const squaredOne = (n) => n ** 2;
// console.log("Squaring with myMap", myMap(numbers, squaredOne ));

// console.log("Incrementing with JS map():", numbers.map((n) => n + 1), numbers.map(increment));

// console.log("Squaring with JS map():", numbers.map((n) => n ** 2), numbers.map(squaredOne));

// console.log(numbers.map((number, index)=> number + index));

// // filter() array method

// const myFilter = (array, callback) => {
//     const newArray = [];

//     for (let i=0; i < array.length; ++i){
//         const current = array[i];
//         const shouldKeep = callback(current);
//         if (shouldKeep){
//             newArray.push(current);
//         }

//     }
//     return newArray;
// }

// const isOdd = (n) => n%2;
// console.log("Filtering out even numbers", myFilter(numbers, isOdd));

// const isEven = (n) => !isOdd(n);
// console.log("Filtering out odd numbers", myFilter(numbers, isEven));

// console.log(numbers.filter((n) => n % 2));
// console.log(numbers.filter((n) => n % 2 === 0));

// // The every() iterator => the condition has to pass for every elements inside the array.

// const myEvery = (array, callback) => {
//     for(let i = 0; i < array.length; i++){
//         const current = array[i];
//         const passed = callback(current);
//         if(!passed){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(myEvery(numbers, (n) => n % 2)); // false
// console.log(myEvery(numbers, (n) => n % 2 === 0)); // false

// console.log(numbers.every((number) => number % 2),
// numbers.every((digit) => digit % 2),numbers.every((something) => something > 0),);

// // some() iterator implementation

// const mySome = (array, callback) => {
//     for(let i = 0; i < array.length; i++){
//         const current = array[i];
//         const passed = callback(current);
//         if(passed){
//             return true;
//         }
//     }
//     return false;
// }

// console.log(myEvery(numbers, (n) => n % 2)); // true
// console.log(myEvery(numbers, (n) => n % 2 === 0)); // true

// console.log(numbers.some((number) => number % 2),
// numbers.some((digit) => digit % 2),numbers.some((something) => something > 0),);

// console.log([3, 7, 5, 9, 11, 13].some((number) => number % 2 === 0)); //false

// const output = (array) =>{
//     return array.map((item) => {
//         if (item % 2 === 0){
//             return item +1;
//         }
//         return item;
//     })
// };

// console.log(output(numbers));

// // reduce() iterator implementation
// // When we use the reduce iterator?
// // Most cases we use reduce when we want an output that is not an array.

// const myReduce = (array, callback, accumulator)=>{
//     for (let i = 0; i < array.length; ++i){
//         accumulator = callback(accumulator, array[i]);
//     }
//     return accumulator;
// }

// console.log("Using myReduce", myReduce(numbers, (accumulator, number) => accumulator + number, 0)
//     // Before the 1st loop: acc = 0;
//     // 1st loop : numbers[0] = 1, acc = acc + number = 1 
//     // 2nd loop : numbers[1] = 2, acc = acc + number = 3
//     // 3rd loop : numbers[2] = 3, acc = acc + number = 6;
// )

console.log("Using myReduce:", (["R","E","M","I"], (acc, char) =>`${acc}${char}`,Array("My Name is ")),
);