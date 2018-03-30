import { cons } from 'hexlet-pairs';
import getRandomInt from './game-utils';
import gameAPI from '..';

const calcEngine = (expression) => {
  if (expression.indexOf('+') !== -1) {
    const operandArray = expression.split('+');
    return Number(operandArray[0]) + Number(operandArray[1]);
  } else if (expression.indexOf('-') !== -1) {
    const operandArray = expression.split('-');
    return Number(operandArray[0]) - Number(operandArray[1]);
  }
  const operandArray = expression.split('*');
  return Number(operandArray[0]) * Number(operandArray[1]);
};

const playGameCalc = () => {
  const questionText = () => {
    const operatorArray = [' + ', ' - ', ' * '];
    const min = 1;
    const max = 10;
    const firstOperand = getRandomInt(min, max);
    const seconOperand = getRandomInt(min, max);
    const operator = operatorArray[getRandomInt(0, operatorArray.length - 1)];
    return firstOperand + operator + seconOperand;
  };
  const correctAnswer = () => expression => calcEngine(expression);
  const gameRule = 'What is the result of the expression?';
  gameAPI(cons(questionText, correctAnswer), gameRule);
};

export default playGameCalc;
