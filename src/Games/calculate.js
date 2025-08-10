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
const operators = ['+', '-', '*'];

genGameRound = () => {
    const numOne = genRandomNumber();
    const numTwo = genRandomNumber();

    const randomIndex = genRandomNumber(operators.length - 1);
    const operator = operators[randomIndex];
    const question = `${numOne} ${operator} ${numTwo}`;

    const correctAnswer = calculate(numOne, numTwo, operator);
    return [question, correctAnswer];
}
const startBrainCalc = () => {
    runGeneralGameLogic(genGameRound, taskDescription);
}
export default startBrainCalc;
