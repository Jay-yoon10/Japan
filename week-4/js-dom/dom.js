// 1. Create a button that allows me to add a task to the list.
// 2. The User input should be cleared when a task is added.
// 3. I want the placeholder para to be removed when task is added.
// 4. If the user is empty give a error to the user.
// 5. I want a button that allows me to change the style (night)

// Selecting single elements
const input = document.querySelector("#taskInput");
const sytleBtn = document.querySelector('#styleBtn')
const main = document.querySelector("#main");
const addBtn = document.querySelector("#adTaskBtn");

// Select multiple elements
const containers = document.querySelectorAll(".container");
const divs = document.querySelectorAll("div")

// How do we change elements using the DOM.

// How can we add functionality to elements using the DOM?
// Adding a class to an element
// => element.classList.add("className")
// Toggling a class on an element
// => element.classList.toggle("className")
// Removing a class on an element
// => element.classList.remove("className")

sytleBtn.addEventListener("click",() => {
    document.querySelector("body").classList.toggle("body--nightMode")
    
    // for (let i = 0; i < containers.length; i++){
    //     containers[i].classList.toggle("container--nightMode");
    // }

    containers.forEach((container) => container.classList.toggle("container--nightMode")
    )
    
    document.querySelectorAll("button").forEach(button => button.classList.toggle("button--nightMode"))
});

// How do we create HTML Elements using DOM?
// What is a node?
const appendTextElement = (elementType, text , parentNode) => {
    // Create new element with a specific type
const newElement = document.createElement(elementType) //"p"
console.log(newElement);
    // Creates a text node
const textNode = document.createTextNode(text); //"Text"
// Attach the text node to the newly created element
newElement.appendChild(textNode);
// Attach the new element to a parent element
//document.querySelector("#tasks")
parentNode.appendChild(newElement)
}
const removeElement = (parentNodeId, childNodeId)=>{
    const parentNode = document.getElementById(parentNodeId);
    const childeNode = document.getElementById(childNodeId);
    parentNode.removeChild(childeNode)
}
addBtn.addEventListener("click", () => {
    if (inputTask.value === ""){
        return alert("Give me a task!");
    }

    if (document.getElementById("placeholderPara")){
        document.querySelector("#tasks").removeChild(document.getElementById("placeholderPara"))
        //removeELement("tasks" , "placeholderPara");
    }
    appendTextElement("p", inputTask.value, document.querySelector('#tasks'))
    inputTask.value = "";
    
})
