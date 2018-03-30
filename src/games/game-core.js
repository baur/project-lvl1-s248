import readlineSync from 'readline-sync';

const gameDraw = (questionText, correctAnswer, gamerName) => {
  console.log(`Question: ${questionText}`);
  const answer = readlineSync.question('Your answer: ');
  const corectRepl = 'Correct!';
  const unCorectRepl = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${gamerName}!`;
  const isCorrect = String(answer) === String(correctAnswer);
  console.log(isCorrect ? corectRepl : unCorectRepl);
  return isCorrect;
};

export default gameDraw;
