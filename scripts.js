
// Returns a random int between min and max exclusively
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min); 
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

// Retuns a lower case selection of rock, paper, or scissors. If canceled null is returned.
// function getPlayerSelection() {
//     let input;
//     do {
//         input = prompt("Play Rock Paper Scissors! \nType Rock, Paper, or Scissors \nWhat's your choice?");
//         // If the prompt is canceled
//         if (input === null) {
//             break;
//         }
//         input = capitalizeFirstLetter(input.toLowerCase());
//     } 
//     while (input !== "Rock" && input !== "Paper" && input !== "Scissors");
    
//     return input;
// }

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return 1;
        } 
        if (computerSelection === "scissors"){
            return 0;
        }
    } 
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return 1;
        } 
        if (computerSelection === "paper"){
            return 0;
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return 1;
        } 
        if (computerSelection === "rock"){
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

// -------------Button Logic -------------------------

const userPrompt = document.querySelector(".user-prompt");
const fightContainer = document.querySelector(".fight-container");
const playerAttacks = Array.from(document.querySelectorAll(".p-attack"));
const computerAttacks = Array.from(document.querySelectorAll(".c-attack"));
const playerContainer = document.querySelector(".player-selection");
const computerContainer = document.querySelector(".computer-selection");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const roundCount = document.querySelector(".round-count");

playerAttacks.forEach(attack => attack.addEventListener("click", (e) => {
    if (userPrompt.style.display !== "none") userPrompt.style.display = "none";
    if (fightContainer.style.display !== "flex") fightContainer.style.display = "flex";
    const playerChoice = e.target.classList[0]
    const computerChoice = getComputerChoice();
    playerContainer.src=`./images/${playerChoice}.png`;

    
    showAnimation(computerChoice.number, () => {
        computerContainer.src=`./images/${computerChoice.attack}.png`;
        const roundWinner = playRound(playerChoice, computerChoice.attack);
        if (roundWinner === 1) {
            updateScore(playerScore);
        } else if (roundWinner === 0) {
            updateScore(computerScore);
        } else {
            console.log("It's a tie");
        }
        updateRound(roundCount);
    });
}));

function updateScore(score) {
    const user = score.textContent.slice(0, -1);
    const newScore = parseInt(score.textContent.slice(-1), 10) + 1;
    score.textContent = user + newScore;

}

function updateRound(round) {
    const roundText = round.textContent.slice(0, -1);
    const newRound = parseInt(round.textContent.slice(-1), 10) + 1;
    round.textContent = roundText + newRound;
}

function getComputerChoice() {
    const randomInt = getRandomIntInclusive(1,3);
    let attackName = "";
    switch (randomInt) {
        case 1: 
            attackName = "rock";
            break;
        case 2: 
            attackName = "paper";
            break;
        case 3: 
            attackName = "scissors";
            break;
    }
    let computerChoice = {
        number: randomInt,
        attack: attackName 
    };
    return computerChoice;
}



async function showAnimation (attackNumber, callback) {
    let attackSelection = 0;
    const loopLength = 12 + attackNumber;
    for ( let i = 1; i <= loopLength; i++) {
        computerAttacks[attackSelection].style.border = "4px solid #DD1C1A";
        await sleep(200);
        if (i !== loopLength) computerAttacks[attackSelection].style.border = "none";
        attackSelection === 2 ? attackSelection = 0: attackSelection++;  
    }
    callback();
}