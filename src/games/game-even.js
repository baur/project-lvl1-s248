import { cons } from 'hexlet-pairs';
import getRandomInt from './game-utils';
import { gameAPI, greeting } from '..';

const isEven = n => n % 2 === 0;

const gameIsEven = (gamerName, correctAnswerCount) => {
  const questionText = () => getRandomInt(1, 100);
  const correctAnswer = () => num => (isEven(num) ? 'yes' : 'no');
  gameAPI(cons(questionText, correctAnswer), gamerName, correctAnswerCount);
};

const playGameIsEven = () => {
  const gamerName = greeting('Answer "yes" if number even otherwise answer "no"');
  gameIsEven(gamerName, 0);
};

export default playGameIsEven;
