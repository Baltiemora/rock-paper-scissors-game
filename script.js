//Scores of players
let playerScore = 0;
let computerScore = 0;

//Generate random computer choice
function getComputerChoice() {
    let rps = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = Math.round(Math.random() * 2);
    return rps[randomChoice];
}

//One of Five round
function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Draw! ${playerSelection} and ${computerSelection}`;
    } else {
        if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
            return `Win! Rock beats Scissors`;
        } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
            return `Win! Paper beats Rock`;
        } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
            return `Win! Scissors beats Paper`;
        } else {
            return `Lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
}

//Full game with 5 rounds
function game() {

    //Add scores
    for (let i = 1; i <= 5; i++) {

        //Ask player selection and save
        //Then make value case-insensitive
        let playerPrompt = prompt('Chose: Rock, Paper or Scissors');
        playerSelection = playerPrompt.slice(0, 1).toUpperCase() + playerPrompt.slice(1).toLowerCase();

        let roundsave = round(playerSelection, getComputerChoice());

        if (roundsave.slice(0,4) === 'Draw') {
            playerScore += 1;
            computerScore += 1;
            console.log(`Score: You(${playerScore}) | Computer(${computerScore})`);
        } else {
            if (roundsave.slice(0, 3) === 'Win') {
                playerScore += 1;
                console.log(`Score: You(${playerScore}) | Computer(${computerScore})`);
            } else {
                computerScore += 1;
                console.log(`Score: You(${playerScore}) | Computer(${computerScore})`);
            }
        }
    }

    //Final result of the game
    if (playerScore > computerScore) {
        console.log(`You win the game!
Score: ${playerScore} against ${computerScore}`)
    } else {
        console.log(`You lose the game!
Score: ${computerScore} against ${playerScore}`)
    }
}

game();