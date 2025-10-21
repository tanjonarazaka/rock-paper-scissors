let humanScore, computerScore;
humanScore = computerScore = 0;

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";

const div = document.createElement("div");
let displayResult = document.createElement("p");
let displayScore = document.createElement("p");

rockBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let result;

    result = playRound("rock", getComputerChoice());
    displayResultAndScore(result);
});

paperBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let result;

    result = playRound("paper", getComputerChoice());
    displayResultAndScore(result);
});

scissorsBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let result;

    result = playRound("scissors", getComputerChoice());
    displayResultAndScore(result);
});

document.body.insertBefore(div, document.body.querySelector("script"));

div.appendChild(rockBtn);
div.appendChild(paperBtn);
div.appendChild(scissorsBtn);
div.appendChild(displayResult);
div.appendChild(displayScore);


/**
 * getComputerChoice() generates a random number between 1 to 3.
 * Returns "rock" if the value is 1, "paper" if 2 and "scissors" if 3.
 */
    

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;

    if(num === 1) {
        return "rock";
    } 
    else if(num === 2) {
        return "paper";
    } 
    else {
        return "scissors";
    }
}

/**
 * playRound() takes the human and computer player choices as arguments,
 * plays a single round, and increments the round winner’s score.
 */

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        return "It's a tie";
    }

    else if(humanChoice === "rock"){
        if(computerChoice === "paper"){
            computerScore++;
            return "You lose! Paper beats Rock";
        }
            
        else {
            humanScore++;
            return "You win! Rock beats Scissors";
        }
    }

    else if(humanChoice === "paper"){
        if(computerChoice === "scissors") {
            computerScore++;
            return "You lose! Scissors beat Paper";
        }
        else {
            humanScore++;
            return "You win! Paper beats Rock";
        }
    }

    else {
        if(computerChoice === "rock") {
            computerScore++;
            return "You lose! Rock beats Scissors";
        }

        else {
            humanScore++;
            return "You win! Scissors beat Paper";
        }
    }
}

/**
 * This function display the result and running score, and updates the score
 * if one of the player reaches 5
 */
function displayResultAndScore(result) {
    let score = `Score: You: ${humanScore} Computer: ${computerScore}`;

    if(humanScore === 5) {
        displayResult.textContent = "You win the game!";
    }
    else if(computerScore === 5) {
        displayResult.textContent = "Computer wins the game!";
    }
    else {
        displayResult.textContent = result;
    }
    
    displayScore.textContent = score;

    if(humanScore === 5 || computerScore === 5) {
        humanScore = computerScore = 0;
    }
}

