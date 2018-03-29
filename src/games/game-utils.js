const isEven = n => n % 2 === 0;

const getRandomInt = () => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min)) + min;
};

export { isEven, getRandomInt };
