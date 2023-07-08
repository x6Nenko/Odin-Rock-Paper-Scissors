// getComputerChoice and score vars

function getComputerChoice() {
    const choicesArray = ["rock", "paper", "scissors"];
    const makeChoice = Math.floor(Math.random() * choicesArray.length);

    return choicesArray[makeChoice];
};

let playerScore = 0;
let computerScore = 0;

function countScore(result) {
    if (playerScore === 3) {
        
    }

    if (result === "won") {
        playerScore += 1;
    } else if (result === "lose") {
        computerScore += 1;
    };
};


// Button event listeners

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const rules = document.getElementById('rules');

const playerImage = document.getElementById('playerImage');
const aiImage = document.getElementById('aiImage');

rockBtn.addEventListener("click", function() {
    rules.style.display = "none";
    playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", function() {
    rules.style.display = "none";
    playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", function() {
    rules.style.display = "none";
    playRound("scissors", getComputerChoice());
});


// Play round

const explanation = document.getElementById('explanation');
const determination = document.getElementById('determination');

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === "rock") {
        playerImage.src='./assets/Stone-LG.png';
        playerImage.alt='stone';
    } else if (player === "paper") {
        playerImage.src='./assets/Paper-LG.png';
        playerImage.alt='paper';
    } else if (player === "scissors") {
        playerImage.src='./assets/Scissors-LG.png';
        playerImage.alt='scissors';
    }

    if (computer === "rock") {
        aiImage.src='./assets/Stone-LG.png';
        aiImage.alt='stone';
    } else if (computer === "paper") {
        aiImage.src='./assets/Paper-LG.png';
        aiImage.alt='paper';
    } else if (computer === "scissors") {
        aiImage.src='./assets/Scissors-LG.png';
        aiImage.alt='scissors';
    }

    if (player === "rock") {
        if (computer === "rock") {
            explanation.innerText = 'Rock equals Rock';
            determination.innerHTML = 'It\'s a <span>Draw</span>!';
            return console.log("Draw!");
        } else if (computer === "scissors") {
            playerScore += 1;
            explanation.innerText = 'Rock beats Scissors';
            determination.innerHTML = 'You <span>won</span> the round!';
            return console.log("You Won! Rock beats Scissors");
        } else if (computer === "paper") {
            computerScore += 1;
            explanation.innerText = 'Paper beats Rock';
            determination.innerHTML = 'You <span>lose</span> the round!';
            return console.log("You Lose! Paper beats Rock");
        }
    };

    if (player === "paper") {
        if (computer === "paper") {
            explanation.innerText = 'Paper equals Paper';
            determination.innerHTML = 'It\'s a <span>Draw</span>!';
            return console.log("Draw!");
        } else if (computer === "rock") {
            playerScore += 1;
            explanation.innerText = 'Paper beats Rock';
            determination.innerHTML = 'You <span>won</span> the round!';
            return console.log("You Won! Paper beats Rock");
        } else if (computer === "scissors") {
            computerScore += 1;
            explanation.innerText = 'Scissors beats Paper';
            determination.innerHTML = 'You <span>lose</span> the round!';
            return console.log("You Lose! Scissors beats Paper");
        }
    };

    if (player === "scissors") {
        if (computer === "scissors") {
            explanation.innerText = 'Scissors equals Scissors';
            determination.innerHTML = 'It\'s a <span>Draw</span>!';
            return console.log("Draw!");
        } else if (computer === "paper") {
            playerScore += 1;
            explanation.innerText = 'Scissors beats Paper';
            determination.innerHTML = 'You <span>won</span> the round!';
            return console.log("You Won! Scissors beats Paper");
        } else if (computer === "rock") {
            computerScore += 1;
            explanation.innerText = 'Rock beats Scissors';
            determination.innerHTML = 'You <span>lose</span> the round!';
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