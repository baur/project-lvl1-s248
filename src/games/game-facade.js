import gameEngine from './game-core';

const gameAPI = (questionText, correctAnswer, gamerName, correctAnswerCount) => {
  if (correctAnswerCount === 3) {
    console.log(`Congratulations, ${gamerName}!`);
    return;
  }
  const gameResult = gameEngine(questionText(), gamerName, correctAnswer(questionText()));
  if (!gameResult) {
    return;
  }
  if (gameResult) { gameAPI(questionText, correctAnswer, gamerName, correctAnswerCount + 1); }
};

export default gameAPI;
