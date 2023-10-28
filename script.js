//Scores of players
let playerScore = 0;
let computerScore = 0;

//DOM
let btnRock = document.querySelector('#rock');
let btnPaper = document.querySelector('#paper');
let btnScissors = document.querySelector('#scissors');
let resultsRound = document.querySelector('#resultsRound');
let scores = document.querySelector('#scores');
let gameOver = document.querySelector('#gameOver');
btnRock.addEventListener('click', () => resultsRound.textContent = round(btnRock.name, getComputerChoice()));
btnPaper.addEventListener('click', () => resultsRound.textContent = round(btnPaper.name, getComputerChoice()));
btnScissors.addEventListener('click', () => resultsRound.textContent = round(btnScissors.name, getComputerChoice()));


//Generate random computer choice
function getComputerChoice() {
    let rps = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = Math.round(Math.random() * 2);
    return rps[randomChoice];
}

//Show game over
function gg() {
    if (playerScore === 5 && computerScore === 5) {
        gameOver.textContent = 'GAME IS OVER! DRAW!';
    } else if (playerScore === 5) {
        gameOver.textContent = 'GAME IS OVER! YOU WON!';
    } else if (computerScore === 5) {
        gameOver.textContent = 'GAME IS OVER! YOU LOSE!';
    }
}

//One round
function round(playerSelection, computerSelection) {
    //Reset all after game over
    if (playerScore === 5 || computerScore === 5) {
        resultsRound.textContent = '';
        gameOver.textContent = '';
        scores.textContent = '';
        playerScore = 0;
        computerScore = 0;
    } else { 
        if (playerSelection === computerSelection) {
            playerScore += 1;
            computerScore += 1;
            scores.textContent = `Scores: You(${playerScore}) | Computer(${computerScore})`;
            gg();
            return `Draw! ${playerSelection} and ${computerSelection}`;
        } else {
            if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
                playerScore += 1;
                scores.textContent = `Scores: You(${playerScore}) | Computer(${computerScore})`;
                gg();
                return `Win! Rock beats Scissors`;
            } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
                playerScore += 1;
                scores.textContent = `Scores: You(${playerScore}) | Computer(${computerScore})`;
                gg();
                return `Win! Paper beats Rock`;
            } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
                playerScore += 1;
                scores.textContent = `Scores: You(${playerScore}) | Computer(${computerScore})`;
                gg();
                return `Win! Scissors beats Paper`;
            } else {
                computerScore += 1;
                scores.textContent = `Scores: You(${playerScore}) | Computer(${computerScore})`;
                gg();
                return `Lose! ${computerSelection} beats ${playerSelection}`;
            }
        } 
    }
}



//Case-insensitive player selection
//playerSelection = playerPrompt.slice(0, 1).toUpperCase() + playerPrompt.slice(1).toLowerCase();
