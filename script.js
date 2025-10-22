let humanScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const restartBtn = document.createElement("button");

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";
restartBtn.textContent = "Play Again";
restartBtn.style.display = "none";

const div = document.createElement("div");
let displayResult = document.createElement("p");
let displayScore = document.createElement("p");

div.appendChild(rockBtn);
div.appendChild(paperBtn);
div.appendChild(scissorsBtn);
div.appendChild(displayResult);
div.appendChild(displayScore);
div.appendChild(restartBtn);
document.body.insertBefore(div, document.body.querySelector("script"));


// --- Event listeners ---
rockBtn.addEventListener("click", () => displayResultAndScore(playRound("rock", getComputerChoice())));
paperBtn.addEventListener("click", () => displayResultAndScore(playRound("paper", getComputerChoice())));
scissorsBtn.addEventListener("click", () => displayResultAndScore(playRound("scissors", getComputerChoice())));
restartBtn.addEventListener("click", resetGame);

// --- Helper functions ---
/**
 * getComputerChoice() generates a random value from the choices array
 */
    

function getComputerChoice() {
   return choices[Math.floor(Math.random() * choices.length)];
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
    displayResult.textContent = result;
    displayScore.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;

    if(humanScore === 5 || computerScore === 5) {
        endGame();
    }
}

function endGame() {
    // Disable the choice buttons
    rockBtn.disabled = paperBtn.disabled = scissorsBtn.disabled = true;

    // Display winner
    if (humanScore === 5) {
        displayResult.textContent = "🎉 You win the game!";
    } else {
        displayResult.textContent = "💻 Computer wins the game!";
    }

    // Show restart button
    restartBtn.style.display = "inline-block";
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    displayResult.textContent = "Game restarted! Make your move.";
    displayScore.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;

    // Re-enable buttons
    rockBtn.disabled = paperBtn.disabled = scissorsBtn.disabled = false;

    // Hide restart button
    restartBtn.style.display = "none";
}

