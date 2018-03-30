import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const greeting = (gameRule) => {
  console.log(`Welcome to the Brain Games! \n${gameRule}.\n`);
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}\n`);
  return gamerName;
};

const gameDraw = (questionText, correctAnswer, gamerName) => {
  console.log(`Question: ${questionText}`);
  const answer = readlineSync.question('Your answer: ');
  const corectRepl = 'Correct!';
  const unCorectRepl = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${gamerName}!`;
  const isCorrect = String(answer) === String(correctAnswer);
  console.log(isCorrect ? corectRepl : unCorectRepl);
  return isCorrect;
};

const playGame = (gameParams, gamerName, correctAnswerCount) => {
  if (correctAnswerCount === 3) {
    console.log(`Congratulations, ${gamerName}!`);
    return;
  }
  const questionText = car(gameParams)();
  const correctAnswer = cdr(gameParams)()(questionText);
  const gameResult = gameDraw(questionText, correctAnswer, gamerName);
  if (!gameResult) {
    return;
  }
  if (gameResult) { playGame(gameParams, gamerName, correctAnswerCount + 1); }
};

const gameAPI = (gameParams, gameRule) => {
  const correctAnswerCount = 0;
  const gamerName = greeting(gameRule);
  playGame(gameParams, gamerName, correctAnswerCount);
};

export default gameAPI;
