function getComputerChoice() {
    //generate a random number between 1 to 3 
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

function getHumanChoice() {
    let choice = prompt("Enter: rock, paper or scissors");
    return choice;
}

// console.log(getComputerChoice());
console.log(getHumanChoice());

