import { cons } from 'hexlet-pairs';
import getRandomInt from './game-utils';
import gameAPI from '..';

const gcd = (n, m) => {
  if (m === 0) return n;
  return gcd(m, n % m);
};

const getGCD = (expression) => {
  const numArray = expression.split(' ');
  const n = Number(numArray[0]);
  const m = Number(numArray[1]);
  return gcd(n, m);
};

const playGameGCD = () => {
  const gameRule = 'Find the greatest common divisor of given numbers.';
  const min = 6;
  const max = 36;
  const questionText = () => `${getRandomInt(min, max)} ${getRandomInt(min, max)}`;
  const correctAnswer = () => nums => getGCD(nums);
  const QandA = () => cons(questionText, correctAnswer);
  gameAPI(QandA, gameRule);
};

export default playGameGCD;
