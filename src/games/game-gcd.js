import { cons } from 'hexlet-pairs';
import getRandomInt from './game-utils';
import gameAPI from '..';

const gcd = (n, m) => {
  if (m === 0) return n;
  return gcd(m, n % m);
};

const playGameGCD = () => {
  const gameRule = 'Find the greatest common divisor of given numbers.';
  const min = 6;
  const max = 36;
  const generateQA = () => {
    const n = getRandomInt(min, max);
    const m = getRandomInt(min, max);
    const questionText = `${n} ${m}`;
    const correctAnswer = gcd(n, m);
    return cons(questionText, correctAnswer);
  };
  gameAPI(generateQA, gameRule);
};

export default playGameGCD;
