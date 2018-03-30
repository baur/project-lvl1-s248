import { cons } from 'hexlet-pairs';
import getRandomInt from './game-utils';
import gameAPI from '..';

const gcd = (n, m) => {
  if (m === 0) return n;
  return gcd(m, n % m);
};

const getAnswer = (expression) => {
  const numArray = expression.split(' ');
  const n = Number(numArray[0]);
  const m = Number(numArray[1]);
  return gcd(n, m);
};

const playGameGCD = () => {
  const gameRule = 'Find the greatest common divisor of given numbers.';
  const questionText = () => `${getRandomInt(6, 36)} ${getRandomInt(6, 36)}`;
  const correctAnswer = () => expression => getAnswer(expression);
  const QandA = () => cons(questionText, correctAnswer);
  gameAPI(QandA, gameRule);
};

export default playGameGCD;
