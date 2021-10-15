const buttons = Array.from(document.querySelectorAll('.game-btn'));
const displayResult = document.querySelector('#result');
// const displayScore = document.querySelector('#score');
const resetBtn = document.querySelector('#reset');
const displayPlayerScore = document.querySelector('.player-score');
const displayComputerScore = document.querySelector('.computer-score');
const roundTracker = document.querySelector('.round-tracker');

console.log(displayPlayerScore);

let scorePlayer = 0;
let scoreComputer = 0;
let round = 0;
displayResult.textContent = 'VS';
// displayScore.textContent = `You ${scorePlayer} - ${scoreComputer} RPS King`;

const computerPlay = () => {
  const choice = ['rock', 'papers', 'scissors'];
  const index = Math.floor(Math.random() * choice.length);
  return choice[index];
};

const playRound = (playerSelection, computerSelection) => {
  let result = '';

  if (playerSelection === computerSelection) {
    result = 'Tie game';
    displayResult.textContent = result;
    return result;
  }

  switch (playerSelection) {
    case 'rock':
      computerSelection === 'scissors' ? result = 'You win ! Rock beats Scissors' : result = 'You loose ! Papers beats Rock';
      break;
    case 'papers':
      computerSelection === 'rock' ? result = 'You win ! Papers beats Rock' : result = 'You loose ! Scissors beats Papers';
      break;
    case 'scissors':
      computerSelection === 'papers' ? result = 'You win ! Scissors beats Papers' : result = 'You loose ! Rocks beats Scissors';
      break;
    default:
      result = '';
      break;
  }

  displayResult.textContent = result;
  return result;
};

const playAgain = () => {
  scorePlayer = 0;
  scoreComputer = 0;
  round = 0;
  resetBtn.disabled = true;
  displayResult.textContent = "Let's go revenge";
  displayPlayerScore.textContent = scorePlayer;
  displayComputerScore.textContent = scoreComputer;
  // displayScore.textContent = `${scorePlayer} - ${scoreComputer}`;
  roundTracker.textContent = `Round: ${round}`;
  buttons.forEach((button) => {
    button.disabled = false;
  });
};

const endGame = () => {
  buttons.forEach((button) => {
    button.disabled = true;
  });
  resetBtn.disabled = false;
  resetBtn.addEventListener('click', () => playAgain());
};

const displayWinnerMessage = (playerPoint, computerPoint) => {
  let winnerMessage;

  playerPoint > computerPoint
    ? winnerMessage = `Great ! you won ${scorePlayer} - ${scoreComputer}`
    : winnerMessage = `Sad, you loose ${scorePlayer} - ${scoreComputer}`;

  displayResult.textContent = winnerMessage;
};

const game = (result) => {
  if (result.includes('win')) {
    scorePlayer += 1;
  } else if (result.includes('loose')) {
    scoreComputer += 1;
  }

  round += 1;

  // displayScore.textContent = `You ${scorePlayer} - ${scoreComputer} RPS King`;
  displayPlayerScore.textContent = scorePlayer;
  displayComputerScore.textContent = scoreComputer;
  roundTracker.textContent = `Round: ${round}`;

  if (scorePlayer === 5 || scoreComputer === 5) {
    endGame();
    displayWinnerMessage(scorePlayer, scoreComputer);
  }
};

const launchGame = (playerSelection) => {
  const computerSelection = computerPlay();
  const resultRound = playRound(playerSelection, computerSelection);
  game(resultRound);
};

buttons.forEach((button) => {
  button.addEventListener('click', () => launchGame(button.id));
});
