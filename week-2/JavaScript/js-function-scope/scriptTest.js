const stringWithUppercaseLetters = "I Am A String With Uppercase Letters";

const getHasUppercaseLetters = () => {
    const stringContains = stringWithUppercaseLetters.includes("[charCodeAt(65)-charCodeAt(90)]");
    console.log(stringContains);

    return stringContains;
}
console.log(getHasUppercaseLetters.stringWithUppercaseLetters);

