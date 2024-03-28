#! /usr/bin/env node
import inquirer from "inquirer";
// 1) generate a computer generated random number
// 2) take user input for gussing number
// 3) compare user input with computer generated number.
const RandomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "PersonGuessedNumber",
        type: "number",
        message: "Please Guess the number between 1 to 10:",
    },
]);
if (answer.PersonGuessedNumber == RandomNumber) {
    console.log("Congratulations! you are right");
}
else {
    console.log("Sorry better luck next time");
}
