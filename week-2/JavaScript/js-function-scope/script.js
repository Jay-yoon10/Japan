// Function Scopes in JS

// What is a scope in JS?
// How do scopes work?
// What is the difference between local and global scopes?

if (true){
    let myVariable = "This is my variable";
    console.log("Inside If Block", myVariable)
}

// Global Scope
let number = 13;

// console.log("Outside my If Block", myVariable);

function circleArea(raius){
    const area = Math.PI * raius **2;
    return area;
}
circleArea(10);
// console.log(area)

const circleAreaArrowFunction = (radius) =>{
    const area = Math.PI * radius **2;
    return area
}

const myFunction1 = () => {
    const firstName = "Remi";
    return firstName;
};

const myFunction2 = () =>{
    const lastName = "HOEPPE";
    const firstName = myFunction1();
    return `${firstName} ${lastName};`
}

console.log(myFunction1());
console.log(myFunction2());

//Nested Scopes
const myGlobal = "Global String";
const scope1 = (scope1Arg) =>{
    const myNumber = 123;

    const scope2 = (scope2Arg) =>{
        const myString = "123";

        const scope3 = (scope3Arg)=>{
            const scope3variable = "HELLO";
            console.log(scope3Arg)
        };
        scope3("Arg of Scope 3");
    } ;
    scope2("Arg of Scope 2");
};
scope1("Arg of Scope 1");