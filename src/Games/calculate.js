import genRandomNumber from "../src/genRandomNumber";
import runGeneralGameLogic from "../src/index.js";

const taskDescription = 'What is the result of the expression?';

const calculate = (numOne, numTwo, operator) => {
    switch (operator) {
        case '+': return numOne + numTwo;
        case '-': return numOne - numTwo;
        case '*': return numOne * numTwo;
        default: throw new Error('Something went wrong :(')
    }
}
