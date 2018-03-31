import { cons } from 'hexlet-pairs';
import getRandomInt from './game-utils';
import gameAPI from '..';

const isPrimeRec = (n, step) => {
  if (step > n / 2) {
    return true;
  }
  if (n <= 1 || n % step === 0) {
    return false;
  }
  return isPrimeRec(n, step + 1);
};

const isPrime = n => isPrimeRec(n, 2);


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
