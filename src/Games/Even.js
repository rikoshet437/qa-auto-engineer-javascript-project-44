import genRandomNumber from "../genRandomNumber.js";
import runGeneralGameLogic from "../index.js";

const isEven = (number) => (number % 2 === 0);

const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const genGameRound = () => {
    const random = genRandomNumber();
    const correctAnswer = isEven(random) ? 'yes' : 'no';
    return [random, correctAnswer];
};

const startBrainEven = () => {
    runGeneralGameLogic(genGameRound, taskDescription);
};

export default startBrainEven;
