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

  const pushArray = (arr, rate, step) => {
    const len = arr.length - 1;
    arr.push(arr[len] + rate);

    if (step === 8) {
      const hideIndex = getRandomInt(0, len);
      const hide = arr[hideIndex];
      arr.splice(hideIndex, 1, '..');
      return cons(arr.join(' '), hide);
    }

    return pushArray(arr, rate, step + 1);
  };

  return pushArray([initNum], factorNum, 0);
};

const playProgression = () => {
  const gameRule = 'What number is missing in this progression?';
  gameAPI(generateQA, gameRule);
};

export default playProgression;
