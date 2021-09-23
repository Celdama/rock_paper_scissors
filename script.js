const buttons = document.querySelectorAll('.game-btn')
const displayResult = document.querySelector('#result')
const displayScore = document.querySelector('#score')
const resetBtn = document.querySelector('#play')

console.log(buttons)

let scorePlayer = 0
let scoreComputer = 0
resetBtn.disabled = true

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const result = playRound(button.id, computerPlay())
    displayResult.textContent = result
    game(result)
  })
})

function endGame () {
  buttons.forEach(button => {
    button.disabled = true
  })
  resetBtn.disabled = false
  resetBtn.addEventListener('click', () => playAgain())
}

function playAgain () {
  console.log('play again bro')
  scorePlayer = 0
  scoreComputer = 0
  resetBtn.disabled = true
  displayResult.textContent = ''
  displayScore.textContent = `${scorePlayer} - ${scoreComputer}`
  buttons.forEach(button => {
    button.disabled = false
  })
}

function computerPlay () {
  const choice = ['rock', 'papers', 'scissors']
  const index = Math.floor(Math.random() * choice.length)
  return choice[index]
}

function playRound (playerSelection, computerSelection) {
  let result = ''

  if (playerSelection === computerSelection) {
    return "It's a tie"
  }

  switch (playerSelection) {
    case 'rock':
      computerSelection === 'scissors' ? result = 'You win ! Rock beats Scissors' : result = 'You loose ! Papers beats Rock'
      break
    case 'papers':
      computerSelection === 'rock' ? result = 'You win ! Papers beats Rock' : result = 'You loose ! Scissors beats Papers'
      break
    case 'scissors':
      computerSelection === 'papers' ? result = 'You win ! Scissors beats Papers' : result = 'You loose ! Rocks beats Scissors'
      break
    default:
      result = ''
      break
  }

  return result
}

function displayWinnerMessage (scorePlayer, scoreComputer) {
  let winnerMessage
  if (scorePlayer > scoreComputer) {
    winnerMessage = `Great ! you won this game ${scorePlayer} - ${scoreComputer}`
  } else if (scorePlayer < scoreComputer) {
    winnerMessage = `Sad, you loose this game  ${scorePlayer} - ${scoreComputer}`
  } else {
    winnerMessage = `It's a tie game  ${scorePlayer} - ${scoreComputer}`
  }
  displayResult.textContent = winnerMessage
}

function game (result) {
  if (result.includes('win')) {
    scorePlayer += 1
  } else if (result.includes('loose')) {
    scoreComputer += 1
  }

  displayScore.textContent = `${scorePlayer} - ${scoreComputer}`

  if (scorePlayer === 5 || scoreComputer === 5) {
    console.log('ennnnnnnd')
    // play = false
    endGame()
    displayWinnerMessage(scorePlayer, scoreComputer)
  }
}
