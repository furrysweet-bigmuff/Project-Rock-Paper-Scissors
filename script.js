const items = ['Rock', 'Paper', 'Scissors'];
const buttons = document.querySelectorAll('button');
const restart = document.querySelector('.restart');
const resultDiv = document.querySelector('.result');
const battleDiv = document.querySelector('.battle');
const playerScoreDiv = document.querySelector('.playerScore');
const computerScoreDiv = document.querySelector('.computerScore');
const finalResultDiv = document.querySelector('.finalResult');
let playerScore = 0;
let computerScore = 0;
let para = document.createElement('p');
let battlePara = document.createElement('p');

buttons.forEach(button => button.addEventListener('click', playRound));
restart.addEventListener('click', restartGame);

function computerPlay() {
    return items[Math.floor(Math.random()*3)];
}

function playRound() {
    let computerChoice = computerPlay();
    let playerChoice = this.value;
    
    battlePara.textContent = 'Your choice is ' + playerChoice + ' vs Computers choice: ' + computerChoice;
    battleDiv.appendChild(battlePara);

    switch (playerChoice) {
        case 'Rock':
            if (computerChoice == 'Scissors') {
                para.textContent = 'You won, Rock beats Scissors!';
                playerScore += 1;
            } else if (computerChoice == 'Paper') {
                para.textContent = 'You lost, Paper beats Rock!';
                computerScore += 1;
            } else {
                para.textContent = 'Draw!';
            }
            break;
        case 'Paper':
            if (computerChoice == 'Rock') {
                para.textContent = 'You won, Paper beats Rock!';
                playerScore += 1;
            } else if (computerChoice == 'Scissors') {
                para.textContent = 'You lost, Scissors beats Paper!';
                computerScore += 1;
            } else {
                para.textContent = 'Draw!';
            }
            break;
        case 'Scissors':
            if (computerChoice == 'Paper') {
                para.textContent = 'You won, Scissors beats Paper!';
                playerScore += 1;
            } else if (computerChoice == 'Rock') {
                para.textContent = 'You lost, Rock beats Scissors!';
                computerScore += 1;
            } else {
                para.textContent = 'Draw!';
            }
    }

    resultDiv.appendChild(para);
    playerScoreDiv.textContent = `Player score: ${playerScore}`;
    computerScoreDiv.textContent = `Computer score: ${computerScore}`;

    if (playerScore == 5 || computerScore == 5) endGame()
}

function endGame() {
    buttons.forEach(button => button.removeEventListener('click', playRound));
    if (playerScore == 5) {
        finalResultDiv.textContent = 'Game over! Player won!';
    } else if (computerScore == 5) {
        finalResultDiv.textContent = 'Game over! Computer won!';
    }
    restart.classList.add('active');
}

function restartGame() {
    buttons.forEach(button => button.addEventListener('click', playRound));
    playerScore = 0;
    computerScore = 0;
    restart.classList.remove('active');
    playerScoreDiv.textContent = `Player score: ${playerScore}`;
    computerScoreDiv.textContent = `Computer score: ${computerScore}`;
    finalResultDiv.textContent = '';
    para.textContent = '';
    battlePara.textContent = '';
}