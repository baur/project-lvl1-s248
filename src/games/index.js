import readlineSync from 'readline-sync';

const isEven = n => n % 2 === 0;

const greeting = () => {
  console.log('Welcome to the Brain Games! \nAnswer "yes" if number even otherwise answer "no".\n');
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}\n`);
  return gamerName;
};

const getRandomInt = () => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min)) + min;
};


const gameIsEven = (gamerName, correctAnswerCount) => {
  if (correctAnswerCount === 3) {
    console.log(`Congratulations, ${gamerName}!`);
    return;
  }
  const randomInt = getRandomInt();
  console.log(`Question: ${randomInt}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(randomInt) ? 'yes' : 'no';
  const coreectRepl = 'Correct!';
  const unCorectRepl = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${gamerName}!`;
  const isCorrect = answer === correctAnswer;
  console.log(isCorrect ? coreectRepl : unCorectRepl);
  if (!isCorrect) {
    return;
  }
  if (isCorrect) { gameIsEven(gamerName, correctAnswerCount + 1); }
};

const playGameCalc = () => {
  const gamerName = greeting();
  console.log(gamerName);
  return 0;
};

const playGameIsEven = () => {
  const gamerName = greeting();
  gameIsEven(gamerName, 0);
};

export { greeting as default, playGameIsEven, playGameCalc };
