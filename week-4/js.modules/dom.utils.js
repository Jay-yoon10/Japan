const createElementWithText = (elementType, text, parent)=>{
    const newElem = document.createElement(elementType);
    const textNode = document.createTextNode(text);
    newElem.appendChild(textNode);
    parent.appendChild(newElem);
}
export default createElementWithText;