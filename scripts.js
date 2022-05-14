function computerPlay() {
    let randomInt = getRandomIntInclusive(1,3);
    switch (randomInt) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
        default:
    }
}

// Returns a random int between min and max exclusively
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min); 
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Retuns a lower case selection of rock, paper, or scissors. If canceled null is returned.
function getPlayerSelection() {
    let input;
    do {
        input = prompt("Play Rock Paper Scissors! \nWhat's your choice?");
        // If the prompt is canceled
        if (input === null) {
            break;
        }
        input = capitalizeFirstLetter(input.toLowerCase());
    } 
    while (input !== "Rock" && input !== "Paper" && input !== "Scissors");
    
    return input;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        } 
        if (computerSelection === "Scissors"){
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        }
    } 
    if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        } 
        if (computerSelection === "Paper"){
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
    if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        } 
        if (computerSelection === "Rock"){
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
    // This must be a tie
    return `It's a tie! ${playerSelection} ties with ${computerSelection}`;
}

playRound(getPlayerSelection, computerPlay);
