import genRandomNumber from "../genRandomNumber.js";
import runGeneralGameLogic from "../index.js";

const taskDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
    let numOne = a;
    let numTwo = b;
    while (numTwo !== 0) {
        const temp = numTwo;
        numTwo = numOne % numTwo;
        numOne = temp;
    }
    return numOne;
};

const genGameRound = () => {
    const numOne = genRandomNumber(50, 1);
    const numTwo = genRandomNumber(50, 1);
    const question = `${numOne} ${numTwo}`;
    const correctAnswer = gcd(numOne, numTwo).toString();
    return [question, correctAnswer];
};

const startBrainGcd = () => {
    runGeneralGameLogic(genGameRound, taskDescription);
};

export default startBrainGcd;