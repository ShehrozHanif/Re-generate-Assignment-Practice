import inquirer from "inquirer";
const input = await inquirer.prompt([
    {
        name: "Height",
        type: "number",
        message: "Enter your height in Cm"
    },
    {
        name: "Weight",
        type: "number",
        message: "Enter your weight in kg"
    }
]);
let bmi = (input.Weight / (input.Height * input.Height));
console.log(`Your BMI is  ${bmi}`);
