// *=> Compute Hardware Quiz
console.log("Welcome to the Compute Hardware Quiz!");

const totalQuestions = 3;
let score = 0;
// Quiz Questions Start
const question1 = prompt("What is the brain of the Computer?")
const answer1 = "CPU";

if(question1.trim().toUpperCase()  === answer1){
    score++;
    console.log(`Hurray! You got it right! \n Your Score is ${score}`);
} else {
    console.log(`You got it wrong (<_>) \n Current Score is: ${score}`);
}


const question2 = prompt("What kind of storage the RAM is in the Computer?")
const answer2 = "Temporary storage";

if(question2.trim() === answer2){
    score++;
    console.log(`Hurray! You got it right! \n Your Score is ${score}`);
} else {
    console.log(`You got it wrong (<_>) \n Current Score is: ${score}`);
}

const question3 = prompt("What kind of storage the Hard Drive is in the Computer?")
const answer3 = "Permanent storage";

if(question3.trim() === answer3){
    score++;
    console.log(`Hurray! You got it right! \n Your Score is ${score}`);
} else {
    console.log(`You got it wrong (<_>) \n Current Score is: ${score}`);
}

let percentage = Math.round((score / totalQuestions) * 100);

console.log(`You got ${percentage}%`);

if(percentage > 90){
    console.log("Congratulations! You got A+ in this exam!");
} else if (percentage > 70){
    console.log("Congratulations! You got A in this exam!");
} else if (percentage > 50){
    console.log("Congratulations! You got B in this exam!");
} else if (percentage > 40){
    console.log("Congratulations! You got C in this exam!");
} else {
    console.log("So Bad! You got F in this exam!");
}