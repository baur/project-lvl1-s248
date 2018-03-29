import readlineSync from 'readline-sync';
/* import { cons } from 'hexlet-pairs'; */
import { isEven, getRandomInt } from './game-utils';
import gameAPI from './game-facade';

const greeting = () => {
  console.log('Welcome to the Brain Games! \nAnswer "yes" if number even otherwise answer "no".\n');
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}\n`);
  return gamerName;
};

const gameIsEven = (gamerName, correctAnswerCount) => {
  const questionText = () => getRandomInt();
  const correctAnswer = () => isEven(questionText() ? 'yes' : 'no');
  gameAPI(questionText, correctAnswer, gamerName, correctAnswerCount);
  /* if (correctAnswerCount === 3) {
    console.log(`Congratulations, ${gamerName}!`);
    return;
  }
  const questionText = getRandomInt();
  const correctAnswer = isEven(questionText) ? 'yes' : 'no';
  const gameResult = gameEngine(questionText, gamerName, correctAnswer);
  if (!gameResult) {
    return;
  }
  if (gameResult) { gameIsEven(gamerName, correctAnswerCount + 1); } */
};


const playGameCalc = () => {
  const gamerName = greeting();
  console.log(gamerName);
  return 0;
};

const playGameIsEven = () => {
  const gamerName = greeting();
  gameIsEven(gamerName, 0);
};

export { greeting as default, playGameIsEven, playGameCalc };
