// let's make a guess game
let a = Math.floor (Math.random()*6 +1) 
// console.log(a)
import chalk from "chalk"
import inquirer from "inquirer"
const input = await inquirer.prompt({
    name:"luckyNumber",
    type:"number",
    message:chalk.yellow("Please Enter a number")
})

if(input.luckyNumber === a){
    console.log(chalk.green("Bingo you are guessing a right number"))

}else{
    console.log(chalk.red("Bad luck! come again next time"))
}