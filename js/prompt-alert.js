const promptNumber = prompt("enter a number");

const convertedNumber = (promptNumber) => {
    const floatedNumber = parseFloat(promptNumber);
    const result = floatedNumber + 200;
    return result;
}

alert(convertedNumber(promptNumber));