import { cons } from 'hexlet-pairs';
import getRandomInt from './game-utils';
import { gameAPI, greeting } from '..';

const gcd = (expression) => {
  const numArray = expression.split(' ');
  const n = Number(numArray[0]);
  const m = Number(numArray[1]);
  if (m === 0) return n;
  return gcd(`${m} ${n % m}`);
};

const gameGCD = (gamerName, correctAnswerCount) => {
  const questionText = () => `${getRandomInt(6, 36)} ${getRandomInt(6, 36)}`;
  const correctAnswer = () => expression => gcd(expression);
  gameAPI(cons(questionText, correctAnswer), gamerName, correctAnswerCount);
};

const playGameGCD = () => {
  const gamerName = greeting('Find the greatest common divisor of given numbers.');
  gameGCD(gamerName, 0);
};

export default playGameGCD;
