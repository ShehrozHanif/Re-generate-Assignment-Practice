import inquirer from "inquirer";
import chalk from "chalk"
const input = await  inquirer.prompt([{
    
    name:"FirstNumber",
    type:"number",
    message: chalk.yellow("Please Enter the number")
    

},
{
    name:"SecondNumber",
    type:"number",
    message:chalk.red("Enter the second number")

},
{
    name:"Operation",
    type:"list",
    message:"Kindly Select the Operator",
    choices:["Addition","Multiplication","Subtraction","Division","Exponential",chalk.green("Modulous")]



},
])

if(input.Operation === "Addition"){
    console.log(`${chalk.red(`After Addition the result is =`)} ${input.FirstNumber + input.SecondNumber}`)

}else if(input.Operation === "Subtraction"){
    console.log(input.FirstNumber - input.SecondNumber)

}else if(input.Operation === "Multiplication"){
    console.log(input.FirstNumber * input.SecondNumber)

}else if(input.Operation === "Exponential"){
    console.log(input.FirstNumber % input.SecondNumber)

}else if(input.Operation === "Modulous"){
    console.log(input.FirstNumber ** input.SecondNumber)

}
else if(input.Operation === "Division"){
    if(input.SecondNumber === 0){
     console.log("Can't divide by zero")
    }else{
        console.log(input.FirstNumber / input.SecondNumber)
    }

}


