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