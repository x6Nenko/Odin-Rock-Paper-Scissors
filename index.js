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

const modalOverlay = document.getElementById('modalOverlay');
const finalResult = document.getElementById('finalResult');
const playAgainBtn = document.getElementById('playAgain');

const finalHeading = document.getElementById('finalHeading');
const finalLog = document.getElementById('finalLog');
const finalLogScore = document.getElementById('finalLogScore');
const randomQuote = document.getElementById('randomQuote');

const circleOne = document.querySelectorAll('.plus-one');
const circleTwo = document.querySelectorAll('.plus-two');
const circleThree = document.querySelectorAll('.plus-three');

let playerScore = 0;
let computerScore = 0;

// Announce winner, score count functions and random AI choice + everything related

const loseQuotes = [
    "Pathetic! You're no match for my genius.",
    "Hahaha! You thought you stood a chance?",
    "Foolish human, your defeat was inevitable."
];
const winQuotes =[
    "Lucky streak, but it won't last long against my brilliance.",
    "You may have won this battle, but I will triumph in the end.",
    "Impressive, but you're merely playing into my grand plan."
];

function setQuote(result) {
    if (result === "won") {
        const randomIndex = Math.floor(Math.random() * winQuotes.length);
        const quote = winQuotes[randomIndex];
        randomQuote.innerText = quote;
        console.log(randomQuote);
    } else if (result === "lose") {
        const randomIndex = Math.floor(Math.random() * loseQuotes.length);
        const quote = loseQuotes[randomIndex];
        randomQuote.innerText = quote;
        console.log(randomQuote);
    }
};

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

function setUpModal(result) {
    if (result === "won") {
        modalOverlay.classList.add('open');
        finalResult.classList.add('open');
        finalResult.classList.add('won');
        circleOne.forEach(circle => {
            circle.style.backgroundColor = "#B5CEA6";
        });
        circleTwo.forEach(circle => {
            circle.style.backgroundColor = "#9BB68B";
        });
        circleThree.forEach(circle => {
            circle.style.backgroundColor = "#7AA760";
        });
    } else if (result === "lose") {
        modalOverlay.classList.add('open');
        finalResult.classList.add('open');
        finalResult.classList.add('lose');
        circleOne.forEach(circle => {
            circle.style.backgroundColor = "#CEA6A6";
        });
        circleTwo.forEach(circle => {
            circle.style.backgroundColor = "#B68B8B";
        });
        circleThree.forEach(circle => {
            circle.style.backgroundColor = "#A76060";
        });
    }
}

function announceWinner() {
    finalResult.classList.remove('won');
    finalResult.classList.remove('lose');

    if (playerScore > computerScore) {
        setUpModal("won");
        setQuote("won");
        finalLog.innerText = `${explanation.innerText}. ${determination.innerText}`;
        finalLogScore.innerText = `The final score is ${playerPointsOnTable.innerText} - ${computerPointsOnTable.innerText}.`;
        finalHeading.innerText = 'Victory!';
    } else {
        setUpModal("lose");
        setQuote("lose");
        finalLog.innerText = `${explanation.innerText}. ${determination.innerText}`;
        finalLogScore.innerText = `The final score is ${playerPointsOnTable.innerText} - ${computerPointsOnTable.innerText}.`;
        finalHeading.innerText = 'Defeat!'
    };

    playerScore = 0;
    computerScore = 0;

    showScore();
};

function setColorBorders(result) {
    playerCard.classList.remove('won');
    playerCard.classList.remove('lose');
    computerCard.classList.remove('won');
    computerCard.classList.remove('lose');

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

playAgainBtn.addEventListener("click", function() {
    modalOverlay.classList.remove('open');
    finalResult.classList.remove('open');
    rules.style.display = '';
    explanation.innerText = '';
    determination.innerHTML = '';
    playerImage.src='./assets/Dice-Question-LG.png';
    playerImage.alt='dice with a question';
    aiImage.src='./assets/Dice-Question-LG.png';
    aiImage.alt='dice with a question';
    setColorBorders("draw");
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
            explanation.innerText = 'Rock equals Rock';
            determination.innerHTML = 'It\'s a <span>Draw</span>!';
            countScore('draw');
        } else if (computer === "scissors") {
            explanation.innerText = 'Rock beats Scissors';
            determination.innerHTML = 'You <span>won</span> the round!';
            countScore("won");
        } else if (computer === "paper") {
            explanation.innerText = 'Paper beats Rock';
            determination.innerHTML = 'You <span>lose</span> the round!';
            countScore("lose");
        }
    };

    if (player === "paper") {
        if (computer === "paper") {
            explanation.innerText = 'Paper equals Paper';
            determination.innerHTML = 'It\'s a <span>Draw</span>!';
            countScore('draw');
        } else if (computer === "rock") {
            explanation.innerText = 'Paper beats Rock';
            determination.innerHTML = 'You <span>won</span> the round!';
            countScore("won");
        } else if (computer === "scissors") {
            explanation.innerText = 'Scissors beats Paper';
            determination.innerHTML = 'You <span>lose</span> the round!';
            countScore("lose");
        }
    };

    if (player === "scissors") {
        if (computer === "scissors") {
            explanation.innerText = 'Scissors equals Scissors';
            determination.innerHTML = 'It\'s a <span>Draw</span>!';
            countScore('draw');
        } else if (computer === "paper") {
            explanation.innerText = 'Scissors beats Paper';
            determination.innerHTML = 'You <span>won</span> the round!';
            countScore("won");
        } else if (computer === "rock") {
            explanation.innerText = 'Rock beats Scissors';
            determination.innerHTML = 'You <span>lose</span> the round!';
            countScore("lose");
        }
    };
}; 