import readlineSync from 'readline-sync';
import userGreeting from './cli';

const roundsCount = 3;

const runGeneralGameLogic = (gameRoundData, taskDescription) => {
    userGreeting();
    console.log(taskDescription);
    for (let i = 0; i < roundsCount; i += 1) {
        const [question, correctAnswer] = gameRoundData();
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        }
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was'${correctAnswer}'. \nLet's try arain, ${userName}!`);
        return;
    }
    console.log(`Congratulations, ${userName}!`);
};
export default runGeneralGameLogic;