import inquirer from "inquirer";
let currency = { USD: 1, // Base Currency
    GBP: 0.79,
    EURO: 0.92,
    KWD: 0.31,
    SAR: 3.75,
    QAR: 3.64,
    PKR: 278,
    INR: 83.30
};
let user = await inquirer.prompt([
    {
        name: "From",
        type: "list",
        message: "Select the currency which you have",
        choices: ["USD", "GBP", "EURO", "KWD", "SAR", "QAR", "PKR", "INR"]
    },
    {
        name: "To",
        type: "list",
        message: "Select the currency which you want to convert",
        choices: ["USD", "GBP", "EURO", "KWD", "SAR", "QAR", "PKR", "INR"]
    },
    {
        name: "Amount",
        type: "number",
        message: "Enter the Anount"
    }
]);
let fromAmount = currency[user.From];
// console.log(fromAmount)
let toAmount = currency[user.To];
// console.log(toAmount)
let amount = user.Amount;
// console.log(amount)
let convertToBase = amount / fromAmount;
// console.log(convertToBase)
let convertedAmount = convertToBase * toAmount;
// console.log(convertedAmount)
let fc = Math.floor(convertedAmount);
console.log(fc);
