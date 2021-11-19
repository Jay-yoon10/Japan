// How can we get all the values for each key in an object?
// How can we get all the keys of an object?
// How to get all the key-value pairs inside of an object? 

const car = {
    brand:"Hyundai" ,
    model: "i30", 
    year: 2018,
    color: "white",
    transmission: "auto",
    hasFourWheels: true,
}
// Object.keys(object) => returns an array of all the keys inside my object
console.log("All the keys inside my car object:", Object.keys(car));
console.log("How many keys does the car object haave?= ", Object.keys(car).length)

// Object.values(object)
console.log("All the values in my car object:", Object.values(car));
console.log("How many values does the car object have? :", Object.values(car).length);

// Object.entries(object) => 
console.log("All the key-value pairs in my car object:,", Object.entries(car));

// How can we use iterators with object data?

console.log(Object.entries(car).map((entry)=>{
    return `The key: ${entry[0]} has the value ${entry[1]}`
}).join("\n"))

// Translate example

// English to Not English
const translate = {
    a:"t",
    b:"h",
    c:"k",
    d:"q",
}

// Not English to English

const reversedTranslate = Object.entries(translate).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;

},[] //initial value of acc
)

console.log(reversedTranslate)

const reversedTranslate2 = Object.entries(translate).sort(function (a, b) {
    return(b - a)

} //initial value of acc
)

console.log(reversedTranslate2)