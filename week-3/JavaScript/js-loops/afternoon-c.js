


// const word = "consonant"
// let newWord=""

// for (let i = 0; i<word.length; i++){
//     if (i % 2 == 0){
//         let newCharCode = word.charCodeAt(i) + 1;
//         if(newCharCode === 123){
//             newCharCode =97
//         }
//         newWord += String.fromCharCode(newCharCode);
//     }else{
//         newWord += word.charAt(i).toUpperCase();
//     }
// }
// // function newCharCode(myString)
// // {
// //     let length = myString.length;

// //     for (var i = 0; i < length; i++){
        
// //         if (myString[i] >= 'a' && myString[i] <= 'z'){
            
// //             return (myString.charCodeAt(i) + 1);

// //         }   
// //     else if (myString[i] >= 'A' && myString[i] <= 'Z'){
            
// //         return (myString.charCodeAt(i) + 1);
// //         }
// //     }   
// // }

// // console.log("myString" + myString[i]);
// // const funkyStringCreator = (stirng)=>{
// //     let newString = new String();
// //     for (let i = 0; i < myString.length; i++){
// //         if (i % 2 != 0){
// //             newString += myString.charAt(i).toUpperCase();
// //         } else if{
// //             newString += myString
// //         }
// //     }
// // }
// // console.log(newCharCode(myString));

// let myString = "This is a sentence for the For challenge."
// function remVowel(string){
//     let vowels = [ 'a', 'e', 'i', 'o', 'u',
//                'A', 'E', 'I', 'O', 'U' ];
//     let result = "";
//     let exception = ['l','m','r']; 
//     let newResult ="";
//     let finalResult = result + newResult;
//     for(let i = 0; i < string.length; i++)
//     {
        
//         if (!vowels.includes(string[i])){
//             result += string[i];
//         }
//     }
//     return result;
// }

// console.log(remVowel(myString));

// // let number = 10;
// // let x = 0;
// // let count = 0;
// // while(x !== number){
// //   x = Math.floor((Math.random() * 15));
// //   console.log(x);
// //   count++;
// // }
// // let counter = 0;

// // let counter = 0;
// // while (counter < 10){
// //     let i = Math.ceil(Math.random() *15);
// //     console.log(`${i}`)
    
// //     counter++;
// // }
// // console.log(counter);

// // const randomNumber = (max) =>{
// //     let i =

// // }
// // Create a function that returns a list of random whole numbers given a range
// // -   Create a function called `generateNumbers`
// // -   This function should take in 2 numbers
// //     -   `n` being the number of numbers to be generated
// //     -   `r` being the max range
// //     -   E.g: `n: 10, r: 20:` function will generate 10 random numbers between 0
// //         and 20
// // -   Function should return `n` numbers in range `0 <= n < r`
// // ### Bonus

// // -   Add an argument to your function called `isUnique`
// // -   If this is set to true, there should be no duplicate numbers in the output
// // ### Bonus

// // -   Add validation to your function to prevent negative values for `n` and `r`
// // -   Add validation to ensure `n < r` when `isUnique` is true
// let number = 0;
// const generateNumbers = (max,r) => {
//     while (number < r){
//     let i = Math.ceil(Math.random() *max);
//     console.log(`${i}`)
//     number ++;
//         if(number{}
// }
// }
// console.log(generateNumbers(10, 5));