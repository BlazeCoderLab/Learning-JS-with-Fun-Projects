// *=> Guess the Number
const targetNumber = Math.round(Math.random() * 100)
let attempts = 0;

while (true) {
    attempts++;

    const guessedNumber = Number(prompt("Guess the number (0-100)!"));
    if(guessedNumber > targetNumber) {
        console.log("Guessed number is greater than the target number!");
    } else if (guessedNumber < targetNumber) {
        console.log("Guessed number is less than the target number!");
    } else {
        console.log("Guessed number is equal to the target number!");
        break;
    }
}