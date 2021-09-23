const buttons = Array.from(document.querySelectorAll('.game-btn'));
const displayResult = document.querySelector('#result');
const displayScore = document.querySelector('#score');
const resetBtn = document.querySelector('#reset');

let scorePlayer = 0;
let scoreComputer = 0;
resetBtn.disabled = true;
displayResult.textContent = 'Start the game';
displayScore.textContent = `You ${scorePlayer} - ${scoreComputer} RPS King`;

function computerPlay() {
  const choice = ['rock', 'papers', 'scissors'];
  const index = Math.floor(Math.random() * choice.length);
  return choice[index];
}

function playRound(playerSelection, computerSelection) {
  let result = '';
  console.log(playerSelection, computerSelection);

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
}

function playAgain() {
  scorePlayer = 0;
  scoreComputer = 0;
  resetBtn.disabled = true;
  displayResult.textContent = "Let's go revenge";
  displayScore.textContent = `${scorePlayer} - ${scoreComputer}`;
  buttons.forEach((button) => {
    button.disabled = false;
  });
}

function endGame() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
  resetBtn.disabled = false;
  resetBtn.addEventListener('click', () => playAgain());
}

function displayWinnerMessage(playerPoint, computerPoint) {
  let winnerMessage;

  playerPoint > computerPoint
    ? winnerMessage = `Great ! you won ${scorePlayer} - ${scoreComputer}`
    : winnerMessage = `Sad, you loose ${scorePlayer} - ${scoreComputer}`;

  displayResult.textContent = winnerMessage;
}

function game(result) {
  if (result.includes('win')) {
    scorePlayer += 1;
  } else if (result.includes('loose')) {
    scoreComputer += 1;
  }

  displayScore.textContent = `You ${scorePlayer} - ${scoreComputer} RPS King`;

  if (scorePlayer === 5 || scoreComputer === 5) {
    endGame();
    displayWinnerMessage(scorePlayer, scoreComputer);
  }
}

function launchGame(playerSelection) {
  const computerSelection = computerPlay();
  const resultRound = playRound(playerSelection, computerSelection);
  game(resultRound);
}

buttons.forEach((button) => {
  button.addEventListener('click', () => launchGame(button.id));
});
