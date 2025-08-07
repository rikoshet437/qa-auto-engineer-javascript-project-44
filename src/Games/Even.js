import genRandomNumber from "../genRandomNumber.js";
import runGeneralGameLogic from "../index.js";

const isEven = (number) => (number % 2 === 0);

const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const genGameRound = () => {
    const question = genRandomNumber();
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return [question, correctAnswer];
};

const startBrainEven = () => {
    runGeneralGameLogic(genGameRound, taskDescription);
};

export default startBrainEven;
