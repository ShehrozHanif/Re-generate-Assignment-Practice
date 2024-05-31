import inquirer from "inquirer";
let user = await inquirer.prompt([
    {
        name: "answer",
        type: "input",
        message: "Pleease enter a sentence "
    }
]);
let words = user.answer.trim().split("");
console.log(words);
console.log(`Length of words is = ${words.length}`);
