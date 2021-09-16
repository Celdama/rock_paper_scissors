function computerPlay() {
  const choice = ["Rock", "Paper", "Scissors"];
  let index = Math.floor(Math.random() * choice.length);

  return choice[index];
}

function playRound(playerSelection, computerSelection) {
  let lowerPlayerSelection = playerSelection.toLowerCase();
  let lowerComputerSelection = computerSelection.toLowerCase();

  if (lowerPlayerSelection === lowerComputerSelection) {
    return "It's a tied"
  }

  if (lowerPlayerSelection === 'rock') {
    if (lowerComputerSelection === 'scissors') {
      return "You win ! Rock beats Scissors";
    } else {
      return "You loose ! Papers beats Rock"
    }
  }

  if (lowerPlayerSelection === 'papers') {
    if (lowerComputerSelection === 'rock') {
      return "You win ! Papers beats Rock";
    } else {
      return "You loose ! Scissors beats Papers"
    }
  }

  if (lowerPlayerSelection === 'scissors') {
    if (lowerComputerSelection === 'papers') {
      return "You win ! Scissors beats papers";
    } else {
      return "You loose ! Rocks beats Scissors"
    }
  }
}

const playerSelection = "rock"
const computerSelection = computerPlay();
console.log(computerSelection)

console.log(playRound(playerSelection, computerSelection))