// vars

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const rules = document.getElementById('rules');

const playerImage = document.getElementById('playerImage');
const aiImage = document.getElementById('aiImage');

const explanation = document.getElementById('explanation');
const determination = document.getElementById('determination');

const playerPoints = document.getElementById('playerPoints');
const computerPoints = document.getElementById('computerPoints');
const playerPointsOnTable = document.getElementById('playerPointsOnTable');
const computerPointsOnTable = document.getElementById('computerPointsOnTable');

const playerCard = document.querySelector('.player');
const computerCard = document.querySelector('.computer');

let playerScore = 0;
let computerScore = 0;

// Announce winner, score count functions and random AI choice + everything related

function getComputerChoice() {
    const choicesArray = ["rock", "paper", "scissors"];
    const makeChoice = Math.floor(Math.random() * choicesArray.length);

    return choicesArray[makeChoice];
};

function showScore() {
    playerPoints.innerText = playerScore;
    playerPointsOnTable.innerText = playerScore;
    computerPoints.innerText = computerScore;
    computerPointsOnTable.innerText = computerScore;
}

function announceWinner() {
    if (playerScore > computerScore) {
        console.log("You won.")
    } else {
        console.log("You lose.");
    };

    playerScore = 0;
    computerScore = 0;

    showScore();
};

function setColorBorders(result) {
    if (result === "won") {
        playerCard.classList.add('won');
        computerCard.classList.add('lose'); 
    } else if (result === "lose") {
        playerCard.classList.add('lose');
        computerCard.classList.add('won');
    } else if (result === "draw") {
        playerCard.classList.remove('won');
        playerCard.classList.remove('lose');
        computerCard.classList.remove('won');
        computerCard.classList.remove('lose');
    };
};

function countScore(result) {
    if (result === "won") {
        playerScore += 1;
        showScore();
        setColorBorders("won");
    } else if (result === "lose") {
        computerScore += 1;
        showScore();
        setColorBorders("lose");
    } else if (result === "draw") {
        setColorBorders("draw");
    };

    if (playerScore === 3 || computerScore === 3) {
        return announceWinner();
    };
};


// Button event listeners

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

function setImages(player, computer) {
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
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    setImages(player, computer);

    if (player === "rock") {
        if (computer === "rock") {
            countScore('draw');
            explanation.innerText = 'Rock equals Rock';
            determination.innerHTML = 'It\'s a <span>Draw</span>!';
            return console.log("Draw!");
        } else if (computer === "scissors") {
            countScore("won");
            explanation.innerText = 'Rock beats Scissors';
            determination.innerHTML = 'You <span>won</span> the round!';
            return console.log("You Won! Rock beats Scissors");
        } else if (computer === "paper") {
            countScore("lose");
            explanation.innerText = 'Paper beats Rock';
            determination.innerHTML = 'You <span>lose</span> the round!';
            return console.log("You Lose! Paper beats Rock");
        }
    };

    if (player === "paper") {
        if (computer === "paper") {
            countScore('draw');
            explanation.innerText = 'Paper equals Paper';
            determination.innerHTML = 'It\'s a <span>Draw</span>!';
            return console.log("Draw!");
        } else if (computer === "rock") {
            countScore("won");
            explanation.innerText = 'Paper beats Rock';
            determination.innerHTML = 'You <span>won</span> the round!';
            return console.log("You Won! Paper beats Rock");
        } else if (computer === "scissors") {
            countScore("lose");
            explanation.innerText = 'Scissors beats Paper';
            determination.innerHTML = 'You <span>lose</span> the round!';
            return console.log("You Lose! Scissors beats Paper");
        }
    };

    if (player === "scissors") {
        if (computer === "scissors") {
            countScore('draw');
            explanation.innerText = 'Scissors equals Scissors';
            determination.innerHTML = 'It\'s a <span>Draw</span>!';
            return console.log("Draw!");
        } else if (computer === "paper") {
            countScore("won");
            explanation.innerText = 'Scissors beats Paper';
            determination.innerHTML = 'You <span>won</span> the round!';
            return console.log("You Won! Scissors beats Paper");
        } else if (computer === "rock") {
            countScore("lose");
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