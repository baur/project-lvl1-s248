import { cons } from 'hexlet-pairs';
import getRandomInt from './game-utils';
import gameAPI from '..';

const balance = (num) => {
  const numArray = String(num).split('').sort();
  const firstElemnt = numArray[0];
  const lastElement = numArray[numArray.length - 1];

  if (lastElement - firstElemnt > 1) {
    numArray[numArray.length - 1] -= 1;
    numArray[0] = String(Number(numArray[0]) + 1);
  } else {
    return num;
  }

  return balance(numArray.sort().join(''));
};

const playGameBalance = () => {
  const gameRule = 'Balance the given number.';
  const questionText = () => getRandomInt(101, 2001);
  const correctAnswer = () => num => balance(num);
  const QandA = () => cons(questionText, correctAnswer);
  gameAPI(QandA, gameRule);
};

export default playGameBalance;
