

const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

console.log("Number Guessing Game!");
console.log("I'm thinking of a number between 1 and 100.");

while (true) {
    const guess = Number(prompt("Guess a number between 1 and 100:"));
    attempts++;

    if (guess === secretNumber) {
        alert(` Correct! You guessed the number in ${attempts} attempts.`);
        break;
    } 
    else if (guess < secretNumber) {
        alert("Too low! Try again.");
    } 
    else if (guess > secretNumber) {
        alert("Too high! Try again.");
    } 
    else {
        alert(" Please enter a valid number.");
    }
}