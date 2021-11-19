// Complex Data
// What are arrays of objects?
// How can we access data insdie an array of objects?
// How can we iterate through a list of objects?

// How do we create an array of objects?
const numbers = [1, 2, 3, 4, 5];

const coaches = [
    {
        id: 1,
        firstName: "Remi",
        lastName: "Hoeppe",
        age: 32,
        title: "Junior Coach",
    },
    {
        id: 2,
        firstName: "Aidan",
        lastName: "Tessalar",
        age: 28,
        title: "Coach",
    },
    {
        id: 3,
        firstName: "Calum",
        lastName: "Hill",
        age: 24,
        title: "Senior Coach",
    },
    
]

// How do we filter objects out of an array objects?
console.log(coaches.filter((coach)=> coach.title.includes("Senior")))
console.log(coaches.filter((coach)=> coach.age > 25))

// How do we find an object key?
// How do we look for a specific key inside an object?
// How can use Object Keys for data validation?

console.log("Find by id", coaches.find((coach) => coach.id ===2))

console.log("Find by id", coaches.find((coach) => coach.id ===4))

// Common Pattern to finding user/product (or anything) by id
const myError = new Error("This id does not exist");
const findCoachByID = (coaches, id)=> {
    const coach = coaches.find((coach)=> coach.id === id)

    if (!coach){
        // throw new Error(`Coach with id: ${id} does not exist`)
        alert (`Coach with id: ${id} does not exist`);
    }
    return coach;
}

console.log("My function is :" , findCoachByID(coaches, 2))
console.log("My function is :" , findCoachByID(coaches, 4))

// How can we map through complex data?

console.log("Creating an array of fullnames", coaches.map((coach)=> `${coach.firstName} ${coach.lastName} is ${coach}`))