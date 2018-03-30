import { cons } from 'hexlet-pairs';
import getRandomInt from './game-utils';
import gameAPI from '..';

const isEven = n => n % 2 === 0;

const playGameIsEven = () => {
  const gameRule = 'Answer "yes" if number even otherwise answer "no"';
  const questionText = () => getRandomInt(1, 100);
  const correctAnswer = () => num => (isEven(num) ? 'yes' : 'no');
  gameAPI(cons(questionText, correctAnswer), gameRule);
};

export default playGameIsEven;
