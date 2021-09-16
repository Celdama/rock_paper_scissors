function computerPlay() {
  const choice = ["Rock", "Paper", "Scissors"];
  let index = Math.floor(Math.random() * choice.length);

  return choice[index];
}

const computerSelection = computerPlay();

console.log(computerSelection)