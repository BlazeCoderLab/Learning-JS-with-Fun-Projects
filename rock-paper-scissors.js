// *=> Rock Paper Scissors Game
let wins = 0;
let losses = 0;
let ties = 0;

while (true) {
    const playerChoice = String(prompt("Enter (rock, paper or scissors) to play or (q) to quit!"));
    if(playerChoice === "q") { 
        break;
    } else if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        console.log("Please enter a valid choice!");
        continue;
    }

    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.round(Math.random() * 2);
    const computerChoice = choices[randomNumber];

    console.log(`The Player chose: ${playerChoice}\n`);
    console.log(`The Computer chose: ${computerChoice}`);

    if (computerChoice == playerChoice) {
        console.log("Match Draw!");
        ties++;
    } else if (
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("Player Wins!");
        wins++;
    } else {
        console.log("Player Lost!");
        losses++;
    }
}

console.log(`Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`);