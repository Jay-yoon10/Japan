// We have a finished front end
// We want to be able to calculate differnt things using user inputs
// - Rectangle perimeter
// - Rectangle area
// - Circle perimeter
// - Circle area

import { rectanglePerim, rectangleArea } from "./rectangleMath.js";

import circleArea, {circlePerim} from "./circleMath.js"
import createElementWithText from "./dom.utils.js";
const rectangleForm = document.getElementById("rectForm")

const createElementWithText = (elementType, text, parent)=>{
    const newElem = document.createElement(elementType);
    const textNode = document.createTextNode(text);
    newElem.appendChild(textNode);
    parent.appendChild(newElem);
}

rectangleForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    const width = document.querySelector("#x").value;
    const height = document.querySelector("#y").value;
    const output = document.querySelector("#rectOutput");
    
    createElementWithText("p", `The Perimeter is :  ${rectanglePerim(width,height)}`,output)
    // const newElemPerim = document.createElement("p");
    // const textPerim = docuement.createTextNode(`The Perimeter is: ${rectanglePerim(width.value, height.value)}`)

    // newElemPerim.appendChild(textPerim);
    // output.appendChild(newElemPerim);
    createElementWithText("p", `The Area is :  ${rectangleArea(width,height)}`,output)
    // const newElemArea = document.createElement("p");
    // const textArea = docuement.createTextNode(`The Area is: ${rectangleArea(width.value, height.value)}`)

    // newElemArea.appendChild(textArea);
    // output.appendChild(newElemArea);


    // console.log(output);
})

circleForm.addEventListener("submit", (event)=> {
    event.preventDefault();
    const radius = document.querySelector('#radius').value;
    const output = document.querySelector("#circleOutput")

    createElementWithText(
        "p",
        `The Perimeter is : ${circlePerim(radius)}`,output
    )

    createElementWithText("p", `The Area is : ${circleArea(radius)}`,output)
})

document.querySelectorAll("input").forEach((input)=> { input.addEventListener("change", (event)=> {
    const value = event.target.value
    if(isNaN(value)){
        event.target.value ="";
        }
    })
})