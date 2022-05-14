function computerPlay() {
    let randomInt = getRandomIntInclusive(1,3);
    switch (randomInt) {
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
        default:
    }
}

// Returns a random int between min and max exclusively
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min); 
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
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
        input = input.toLowerCase();
    } 
    while (input !== "rock" && input !== "paper" && input !== "scissors");
    
    return input;
}

function playRound(playerSelection, computerSelection) {
    
}