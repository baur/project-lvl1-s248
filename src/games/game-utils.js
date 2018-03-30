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

const gcd = (expression) => {
  const numArray = expression.split(' ');
  const n = Number(numArray[0]);
  const m = Number(numArray[1]);
  if (m === 0) return n;
  return gcd(`${m} ${n % m}`);
};

export { isEven, getRandomInt, calcEngine, gcd };
