import { cons } from 'hexlet-pairs';
import getRandomInt from './game-utils';
import gameAPI from '..';

const calcEngine = (firstOperand, operator, seconOperand) => {
  if (operator.trim() === '+') {
    return firstOperand + seconOperand;
  } else if (operator.trim() === '-') {
    return firstOperand - seconOperand;
  }
  return firstOperand * seconOperand;
};

const generateQA = () => {
  const operatorArray = [' + ', ' - ', ' * '];
  const min = 1;
  const max = 10;
  const firstOperand = getRandomInt(min, max);
  const seconOperand = getRandomInt(min, max);
  const operator = operatorArray[getRandomInt(0, operatorArray.length - 1)];
  const questionText = firstOperand + operator + seconOperand;
  const correctAnswer = calcEngine(firstOperand, operator, seconOperand);
  return cons(questionText, correctAnswer);
};

const playGameCalc = () => {
  const gameRule = 'What is the result of the expression?';
  gameAPI(generateQA, gameRule);
};

export default playGameCalc;
