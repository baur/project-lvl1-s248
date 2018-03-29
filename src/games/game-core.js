import readlineSync from 'readline-sync';
/* import { car, cdr } from 'hexlet-pairs'; */

const gameEngine = (questionText, gamerName, correctAnswer) => {
  /* const questionText = car(gameParams);
  const gamerName = cdr(car(gameParams));
  const correctAnswer = cdr(cdr(gameParams)); */
  console.log(`Question: ${questionText}`);
  const answer = readlineSync.question('Your answer: ');
  const corectRepl = 'Correct!';
  const unCorectRepl = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${gamerName}!`;
  const isCorrect = answer === correctAnswer;
  console.log(isCorrect ? corectRepl : unCorectRepl);
  return isCorrect;
};

export default gameEngine;
