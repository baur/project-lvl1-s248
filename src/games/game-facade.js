import { car, cdr } from 'hexlet-pairs';
import gameDraw from './game-core';

const gameAPI = (gameParams, gamerName, correctAnswerCount) => {
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
  if (gameResult) { gameAPI(gameParams, gamerName, correctAnswerCount + 1); }
};

export default gameAPI;
