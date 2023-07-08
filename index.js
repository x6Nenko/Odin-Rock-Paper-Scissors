function getComputerChoice() {
    const choicesArray = ["Rock", "Paper", "Scissors"];
    const makeChoice = Math.floor(Math.random() * choicesArray.length);

    return choicesArray[makeChoice];
};

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === "rock") {
        if (computer === "rock") {
            return console.log("Draw!");
        } else if (computer === "scissors") {
            playerScore += 1;
            return console.log("You Won! Rock beats Scissors");
        } else if (computer === "paper") {
            computerScore += 1;
            return console.log("You Lose! Paper beats Rock");
        }
    };

    if (player === "paper") {
        if (computer === "paper") {
            return console.log("Draw!");
        } else if (computer === "rock") {
            playerScore += 1;
            return console.log("You Won! Paper beats Rock");
        } else if (computer === "scissors") {
            computerScore += 1;
            return console.log("You Lose! Scissors beats Paper");
        }
    };

    if (player === "scissors") {
        if (computer === "scissors") {
            return console.log("Draw!");
        } else if (computer === "paper") {
            playerScore += 1;
            return console.log("You Won! Scissors beats Paper");
        } else if (computer === "rock") {
            computerScore += 1;
            return console.log("You Lose! Rock beats Scissors");
        }
    };
};

function game() {
    for (let index = 0; index < 5; index++) {
        const computerSelection = getComputerChoice().toLowerCase();
        const playerSelection = prompt("Whats your choice?").toLowerCase();
        playRound(playerSelection, computerSelection);
        console.log(playerScore, computerScore);
    };

    if (playerScore === computerScore) {
        console.log("Close one. It's a Draw!");
    } else if (playerScore > computerScore) {
        console.log("Player has Won!");
    } else if (computerScore > playerScore) {
        console.log("Computer has Won!");
    };
    
    playerScore = 0;
    computerScore = 0;
};

// game();