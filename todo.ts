// import inquirer from "inquirer"

import inquirer from "inquirer"

// let todoTask = []
// let condtion  = true

// console.log("Welcone to To-do List")

// while(condtion){
//     let addTask = await inquirer.prompt(
//         {
//             name:"task",
//             type:"input",
//             message:"Enter new task"
//         }
//     )
//     todoTask.push(addTask.task)

//     console.log("Task Added Successfully",addTask.task)

//     let addMoreTask = await inquirer.prompt(
//         {
//             name:"addmore",
//             type:"confirm",
//             message:"would you like add more task?",
//             default: false
//         }
//     )
//     condtion=addMoreTask.addmore
   
//     console.log("Updated to-do List", todoTask)

// }


// currency converter 

// let currency:any = {
//     USD:  1, // Base Currency
//     GBP:  0.79,
//     EURO: 0.92,
//     KWD: 0.31,
//     SAR: 3.75,
//     QAR: 3.64,
//     PKR: 278,
//     INR: 83.30
// }

// let userAnswer = await inquirer.prompt([
//     {
//         name:"from",
//         type:"list",
//         message:"Enter from Currency",
//         choices:["USD","GBP","EURO","KWD","SAR","QAR","PKR","INR"]
//     },

//     {
//         name:"to",
//         type:"list",
//         message:"Enter to Currency",
//         choices:["USD","GBP","EURO","KWD","SAR","QAR","PKR","INR"]
//     },
//     {
//         name:"amount",
//         type:"number",
//         message:"Enter the Amount"
//     }
// ])


// let fromCurrency = currency[userAnswer.from]
// let toCurrency = currency[userAnswer.to]
// let amount = userAnswer.amount

// let baseCurrency = amount/fromCurrency   // conver the money to usd 
// let convertCurrency = baseCurrency * toCurrency  // than convert it into where ever you want
// let fc = Math.floor(convertCurrency)
// console.log(fc)


// word couonter

let userInput = await inquirer.prompt([
    {
        name:"word",
        type:"input",
        message:"Enter a message"
    }
])

let sentence =userInput.word.trim().split("")
console.log(sentence)

console.log(`words length = ${sentence.length}`)