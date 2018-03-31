import { cons } from 'hexlet-pairs';
import getRandomInt from './game-utils';
import gameAPI from '..';

const generateQA = () => {
  const initNum = getRandomInt(7, 77);
  const factorNum = getRandomInt(1, 10);

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
