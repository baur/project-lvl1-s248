import readlineSync from 'readline-sync';
import { cons } from 'hexlet-pairs';
import gameAPI from './game-facade';
import { isEven, getRandomInt, calcEngine} from './game-utils';

const greeting = (gameRule) => {
  console.log(`Welcome to the Brain Games! \n${gameRule}.\n`);
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}\n`);
  return gamerName;
};

const gameIsEven = (gamerName, correctAnswerCount) => {
  const questionText = () => getRandomInt(1,100);
  const correctAnswer = () => num => (isEven(num) ? 'yes' : 'no');
  gameAPI(cons(questionText, correctAnswer), gamerName, correctAnswerCount);
};

const gameCalc = (gamerName, correctAnswerCount) => {
  const questionText = () => {
    const operatorArray = [' + ',' - ',' * '];
    const min = 1;
    const max = 10;
    const firstOperand = getRandomInt(min,max);
    const seconOperand = getRandomInt(min, max);
    const operator = operatorArray[getRandomInt(0,operatorArray.length-1)];
    return firstOperand  + operator + seconOperand;
  }
  const correctAnswer = () => expression => calcEngine(expression);
  gameAPI(cons(questionText, correctAnswer), gamerName, correctAnswerCount);
};

const playGameCalc = () => {
  const gamerName = greeting('What is the result of the expression?');
  gameCalc(gamerName, 0);
};

const playGameIsEven = () => {
  const gamerName = greeting('Answer "yes" if number even otherwise answer "no"');
  gameIsEven(gamerName, 0);
};

export { greeting as default, playGameIsEven, playGameCalc };
