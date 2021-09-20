function computerPlay () {
  const choice = ['Rock', 'Papers', 'Scissors']
  const index = Math.floor(Math.random() * choice.length)
  return choice[index]
}

function playRound (playerSelection, computerSelection) {
  const lowerPlayerSelection = playerSelection.toLowerCase()
  const lowerComputerSelection = computerSelection.toLowerCase()
  let result = ''

  if (lowerPlayerSelection === lowerComputerSelection) {
    return "It's a tie"
  }

  switch (lowerPlayerSelection) {
    case 'rock':
      lowerComputerSelection === 'scissors' ? result = 'You win ! Rock beats Scissors' : result = 'You loose ! Papers beats Rock'
      break
    case 'papers':
      lowerComputerSelection === 'rock' ? result = 'You win ! Papers beats Rock' : result = 'You loose ! Scissors beats Papers'
      break
    case 'scissors':
      lowerComputerSelection === 'papers' ? result = 'You win ! Scissors beats Papers' : result = 'You loose ! Rocks beats Scissors'
      break
    default:
      result = ''
      break
  }

  return result
}

function game () {
  let scorePlayer = 0
  let scoreComputer = 0
  for (let index = 0; index < 5; index++) {
    const computerSelection = computerPlay()
    const playerSelection = prompt('Choose Rock, Papers, Scissors ?', '')
    console.log(`round ${index}`)
    const result = playRound(playerSelection, computerSelection)
    console.log(result)
    if (result.includes('win')) {
      scorePlayer++
    } else if (result.includes('loose')) {
      scoreComputer++
    }
  }

  let result
  if (scorePlayer > scoreComputer) {
    result = `Great ! you won this game ${scorePlayer} - ${scoreComputer}`
  } else if (scorePlayer < scoreComputer) {
    result = `Sad, you loose this game  ${scorePlayer} - ${scoreComputer}`
  } else {
    result = `It's a tie game  ${scorePlayer} - ${scoreComputer}`
  }
  return result
}

console.log(game())
