const hobbies = ["swimming", "tennis", "skiing"];

console.log(hobbies[0]);

const removedHobby = hobbies.shift();

console.log(removedHobby);

const lengthOfHobby = hobbies.length;
console.log(lengthOfHobby);

const anotherHobby = hobbies.push("computer");
console.log(hobbies[hobbies.length-1]);

const allOfHobbies = hobbies.join(", ");

console.log("My hobbies are :" , allOfHobbies);

const grocery =["Milk","Apple","Mango","Melon","Pear"];
const joinedGrocery=grocery.join("|");

console.log(joinedGrocery);