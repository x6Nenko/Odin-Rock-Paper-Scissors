function getComputerChoice() {
    const choicesArray = ["Rock", "Paper", "Scissors"]
    const makeChoice = Math.floor(Math.random() * choicesArray.length);

    return choicesArray[makeChoice]
};

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === "rock") {
        if (computer === "rock") {
            return console.log("Draw!");
        } else if (computer === "scissors") {
            return console.log("You Won! Rock beats Scissors");
        } else if (computer === "paper") {
            return console.log("You Lose! Paper beats Rock");
        }
    }

    if (player === "paper") {
        if (computer === "paper") {
            return console.log("Draw!");
        } else if (computer === "rock") {
            return console.log("You Won! Paper beats Rock");
        } else if (computer === "scissors") {
            return console.log("You Lose! Scissors beats Paper");
        }
    }

    if (player === "scissors") {
        if (computer === "scissors") {
            return console.log("Draw!");
        } else if (computer === "paper") {
            return console.log("You Won! Scissors beats Paper");
        } else if (computer === "rock") {
            return console.log("You Lose! Rock beats Scissors");
        }
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));