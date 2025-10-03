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
 * getHumanChoice() prompts a string from the user. Assuming the value
 * is always a valid one.
 */

function getHumanChoice() {
    let choice = prompt("Enter: rock, paper or scissors");
    return choice.toLowerCase();
}

/**
 * playRound() takes the human and computer player choices as arguments,
 * plays a single round, increments the round winner’s score and logs
 * a winner announcement.
 */

function playRound(humanChoice, computerChoice) {
    let count = 0;

    if(humanChoice === computerChoice) {
        console.log("It's a tie");
    }

    else if(humanChoice === "rock"){
        if(computerChoice === "paper"){
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }
            
        else {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        }

    }

    else if(humanChoice === "paper"){
        if(computerChoice === "scissors") {
            console.log("You lose! Scissors beat Paper");
            computerScore++;
        }
        else {
            console.log("You win! Paper beats Rock");
            humanScore++;
        }
    }

    else {
        if(computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        }

        else {
            console.log("You win! Scissors beat Paper");
            humanScore++;
        }
    }
}

/**
 * playGame() calls playRound to play 5 rounds,
 * keeps track of the scores and declares a winner at the end.
 */

function playGame() {
    let humanSelection, computerSelection;

    for(let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }   

    if(humanScore === computerScore)
        console.log("\nIt's a tie! No winner");
    else if(humanScore > computerScore)
        console.log("\nYou win the game!");
    else
        console.log("\nThe Computer wins the game!");
        
}

let humanScore, computerScore;
humanScore = computerScore = 0;

playGame();

console.log("\nFinal Scores:")
console.log(`Human: ${humanScore}`);
console.log(`Computer: ${computerScore}`);

