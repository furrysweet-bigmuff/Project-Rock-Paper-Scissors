let items = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return items[Math.floor(Math.random()*3)];
}

function playerPlay() {
    let choice = '';
    let validate = false;

    while (!validate) {
        choice = prompt('Choose your item');
        if (choice == null) {
            alert('Enter a value!');
        } else {
            choice = choice.trim().charAt(0).toUpperCase() + choice.trim().substring(1,choice.length); 
            validate = checkPlayersChoice(choice);
        }
    }
    return choice;
}

function checkPlayersChoice(item) {    
    if (item !== 'Rock' && item !== 'Paper' && item !== 'Scissors') {
        alert('Choose between Rock, Paper or Scissors only!');
        return false;
    } else {
        return true;
    }
}

function playRound(playerSelection, computerSelection) {
    let computerChoice = computerPlay();
    let playerChoice = playerPlay();
    let playerWon;

    console.log('Your choice is ' + playerChoice + ' vs Computers choice: ' + computerChoice);

    switch (playerChoice) {
        case 'Rock':
            if (computerChoice == 'Scissors') {
                console.log('You won, Rock beats Scissors!');
                playerWon = 1;
            } else if (computerChoice == 'Paper') {
                console.log('You lost, Paper beats Rock!');
                playerWon = 2;
            } else {
                console.log('Draw!');
                playerWon = 3;
            }
            break;
        case 'Paper':
            if (computerChoice == 'Rock') {
                console.log('You won, Paper beats Rock!');
                playerWon = 1;
            } else if (computerChoice == 'Scissors') {
                console.log('You lost, Scissors beats Paper!');
                playerWon = 2;
            } else {
                console.log('Draw!');
                playerWon = 3;
            }
            break;
        case 'Scissors':
            if (computerChoice == 'Paper') {
                console.log('You won, Scissors beats Paper!');
                playerWon = 1;
            } else if (computerChoice == 'Rock') {
                console.log('You lost, Rock beats Scissors!');
                playerWon = 2;
            } else {
                console.log('Draw!');
                playerWon = 3;
            }
    }

    return playerWon;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundResult;

    for (let i = 0; i < 5; i++) {
        roundResult = playRound(playerPlay,computerPlay);
        if (roundResult == 1) {
            playerScore++;
        } else if (roundResult == 2) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log('You win! Your score is ' + playerScore + ' and computer\'s is ' + computerScore);
    } else if (playerScore < computerScore) {
        console.log('You lost! Your score is ' + playerScore + ' and computer\'s is ' + computerScore);
    } else {
        console.log('It\'s a draw! Your scores are ' + playerScore);
    }
}

game();