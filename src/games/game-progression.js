import { cons } from 'hexlet-pairs';
import getRandomInt from './game-utils';
import gameAPI from '..';

const generateQA = () => {
  const minNum = 7;
  const maxNum = 77;
  const initNum = getRandomInt(minNum, maxNum);
  const minRate = 1;
  const maxRate = 10;
  const factorNum = getRandomInt(minRate, maxRate);

  const generateArray = (arr, rate, step) => {
    const len = arr.length - 1;
    arr.push(arr[len] + rate);

    if (step === 8) {
      const indexPos = getRandomInt(0, len);
      const answer = arr[indexPos];
      arr.splice(indexPos, 1, '..');
      return cons(arr.join(' '), answer);
    }

    return generateArray(arr, rate, step + 1);
  };

  return generateArray([initNum], factorNum, 0);
};

const playProgression = () => {
  const gameRule = 'What number is missing in this progression?';
  gameAPI(generateQA, gameRule);
};

export default playProgression;
