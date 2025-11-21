// *=> Adventure Game (Extend it and make it a real life fun game (host online))
while (true) {
    const question = String(prompt("Would you like to play (y/n)?"));
    if ((question === "" || question.length === 0) || (question.toLowerCase() !== "n" && question.toLowerCase() !== "y")) {
        console.log("Please enter a valid answer!");
        continue;
    } else if (question.toLowerCase() === "n") {
        console.log("That's too bad (<_>)");
        break;
    } else {
        console.log("Hurray! Let play the game and do fun!");

        while(true){

            const question2 = String(prompt("Would you like to go left or right (left/right)?"));
            if ((question2 === "" || question2.length === 0) || (question2.toLowerCase() !== "left" && question2.toLowerCase() !== "right")) {
                console.log("Please enter a valid answer!");
                continue;
            } else if (question2.toLowerCase() === "left") {
                console.log("Oops! You chose the wrong way. You lost the track! You Lost!");
                break;
            } else {
                console.log("Hurray! You chose the correct way. You found the track!");
                
                while(true){

                    const question3 = String(prompt("Would you like to follow the track and reach destination or wanna choose any other shortcut (track/shortcut)?"));
                    if ((question3 === "" || question3.length === 0) || (question3.toLowerCase() !== "track" && question3.toLowerCase() !== "shortcut")) {
                        console.log("Please enter a valid answer!");
                        continue;
                    } else if (question3 === "shortcut") {
                        console.log("Oops! You might get lost or get attached by the animals. You Lost!");
                        break;
                    } else {
                        console.log("Hurray! You chose the track and reached the destination. \n**You Won!**");
                    }
                    break;
                }
            }
            break;
        }
    }
    break;
}