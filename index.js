#! /usr/bin/env node
import inquirer from 'inquirer';
async function numberGuessingGame() {
    const systemGeneratedNo = Math.floor(Math.random() * 10) + 1;
    const answers = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: "Write your guess between 1 to 10: "
        }
    ]);
    const { userGuess } = answers;
    console.log(userGuess, "userGuess", systemGeneratedNo);
    if (userGuess === systemGeneratedNo) {
        console.log(userGuess, "userGuess", systemGeneratedNo, 'SYs');
        console.log("Yeaaaa Your answer is correct \n You Win!");
    }
    else {
        console.log("Please try again Better luck next time!");
    }
}
numberGuessingGame();
