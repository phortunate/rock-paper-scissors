function computerPlay() {
    let randomInt = getRandomIntInclusive(1,3);
    switch (randomInt) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
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
        input = prompt("Play Rock Paper Scissors! \nType Rock, Paper, or Scissors \nWhat's your choice?");
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
            return 1;
        } 
        if (computerSelection === "Scissors"){
            return 0;
        }
    } 
    if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            return 1;
        } 
        if (computerSelection === "Paper"){
            return 0;
        }
    }
    if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            return 1;
        } 
        if (computerSelection === "Rock"){
            return 0;
        }
    }
    // This must be a tie
    return 2;
}
// console.log(playRound(getPlayerSelection(),computerPlay()) === null);

// function playGame(rounds) {
//     let playerScore = 0;
//     let computerScore = 0;


//     for (let i = 1; i <= rounds; i++) {
        
//         let playerSelection = getPlayerSelection();
//         let computerSelection = computerPlay();
        
//         // Player canceled on input screen
//         if (playerSelection === null) {
//             console.log("Game canceled.")
//             return;
//         }

//         let result = playRound(playerSelection, computerSelection);

//         //Computer wins round
//         if (result === 0) {
//             console.log(`Round ${i}: You Lose! ${computerSelection} beats ${playerSelection}.`);
//             ++computerScore;
//         // Player wins round
//         } else if (result === 1) {
//             console.log(`Round ${i}: You Win! ${playerSelection} beats ${computerSelection}.`);
//             ++playerScore;
//         // Tie
//         } else {
//             console.log(`Round ${i}: It's a tie. ${playerSelection} ties with ${computerSelection}`);
//         }
//     }

//     if (playerScore > computerScore) {
//         console.log(`Victory! You won!`);
//     } else if (playerScore < computerScore) {
//         console.log(`Defeat! You lost.`);
//     } else {
//         console.log(`It's a tie.`);
//     }
// }

// const rounds = document.querySelector(".rounds");
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//     rounds.style.display = "block";
// });

const btnPlayGame = document.querySelector(".game-container__start .btn");

btnPlayGame.addEventListener("click", (e) => {
    const gcStart = document.querySelector("." + e.target.parentNode.className);
    gcStart.style.display = "none";
});

const btnToggle = document.querySelector(".toggle");
btnToggle.addEventListener("click", () => {
    const startScreen = document.querySelector(".game-container__start");
    if (startScreen.style.display !== "none") {
        startScreen.style.display = "none";
    } else {
        startScreen.style.display = "flex";
    }
});