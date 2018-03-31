import { cons } from 'hexlet-pairs';
import getRandomInt from './game-utils';
import gameAPI from '..';

const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQA = () => {
  const questionText = getRandomInt(2, 100);
  const correctAnswer = isPrime(questionText) ? 'yes' : 'no';
  return cons(questionText, correctAnswer);
};

const playPrime = () => {
  const gameRule = 'Is this number prime?';
  gameAPI(generateQA, gameRule);
};

export default playPrime;
