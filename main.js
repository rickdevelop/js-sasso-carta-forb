
let gameChoices = ['pietra', 'carta', 'forbici'];
let round = 0;

function computerPlay() {
  let randomNumber = Math.floor(Math.random()*gameChoices.length);
  return gameChoices[randomNumber];
}


function playGame(playerSelection, computerSelection) {
  if (playerSelection === 'pietra' && computerSelection === 'forbici' ||
      playerSelection === 'carta' && computerSelection === 'pietra' ||
      playerSelection === 'forbici' && computerSelection === 'carta') {
      return 'vittoria';
  } else if (computerSelection === 'pietra' && playerSelection === 'forbici' ||
      computerSelection === 'carta' && playerSelection === 'pietra' ||
      computerSelection === 'forbici' && playerSelection === 'carta') {
      return 'hai perso';
  } else {
      return 'pareggio';
  }
}

function gioco() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i=0; i < 5; i++) {

    const playerSelection = prompt("pietra, carta, forbici");
    const computerSelection = computerPlay();
    console.log(`Cpu "${computerSelection}"`);
    const consoleOutput = playGame(playerSelection, computerSelection);
    console.log(consoleOutput);

    if (consoleOutput.includes("vittoria", 3)) {
      ++playerScore;
    }else {
      ++computerScore;
    }
  }

  if (playerScore < computerScore){
    console.log("hai perso.");
  } else if (playerScore > computerScore) {
    console.log("hai vinto ");
  } else {
    console.log("pareggio");
  }

  }
