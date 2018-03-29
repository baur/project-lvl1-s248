import readlineSync from 'readline-sync';

const isEven = n => n % 2 === 0;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}`);
};

const getRandomInt = () => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min)) + min;
};

const game = () => {
  const randomInt = getRandomInt();
  console.log(`Question: ${randomInt}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(randomInt) ? 'yes' : 'no';
  answer === correctAnswer ? console.log('Correct!') : console.log("'yes' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, Bill!");
};

export { greeting as default, game };
