import { cons } from 'hexlet-pairs';
import getRandomInt from './game-utils';
import gameAPI from '..';

const isEven = n => n % 2 === 0;

const playGameIsEven = () => {
  const gameRule = 'Answer "yes" if number even otherwise answer "no"';
  const questionText = () => getRandomInt(1, 100);
  const correctAnswer = () => num => (isEven(num) ? 'yes' : 'no');
  const QandA = () => cons(questionText, correctAnswer);
  gameAPI(QandA, gameRule);
};

export default playGameIsEven;
