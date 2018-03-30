const isEven = n => n % 2 === 0;

const getRandomInt = (min, max) => (Math.floor(Math.random() * ((max + 1) - min)) + min);

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

export { isEven, getRandomInt, calcEngine };
