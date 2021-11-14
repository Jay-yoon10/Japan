const limitLoop=(n) => {
    let sum = 0;
    for (let i=0; i <=n ; i++){
        
        console.log(`looping : ${i}`);
        sum += i;
    }
    return sum;
}
console.log(limitLoop(10));

const shoppingList = ["milk","watermelon","eggs","soap","butter","apples","ice-cream"];
const newShoppingList=[];
const addedShoppingList = (array) => {
    for(let index = 0; index < array.length; ++index){
        newShoppingList.push(array[(index)]); 
        
    }
    return newShoppingList;
}
console.log(addedShoppingList(shoppingList));


