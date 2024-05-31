import inquirer from "inquirer";
// let myPin = 1234
// let mybalance = 10000
// const input = await inquirer.prompt({
//     name:"Atm",
//     type:"input",
//     message:"Enter your Atm Card \n press Enter"
// })
// let pinNumber = await inquirer.prompt({
//     name:"pin",
//     type:"number",
//     message:"Please Enter your pin number"
// })
// if(myPin === pinNumber.pin){
//     console.log("Welcomme to the Atm machine")
// }else{
//     console.log("Your pin is Incorrect")
// }
// let Operation = await inquirer.prompt({
//     name:"option",
//     type:"list",
//     message:"What would you like to do?",
//     choices:["Widthdraw","CheckBalance","FastCash"]
// })
// if(Operation.option == "Widthdraw"){
//     let balance = await inquirer.prompt({
//         name:"Amount",
//         type:"number",
//         message:"Please enter an Amount"
//     })
//     if(balance.Amount > mybalance){
//         console.log("Insufficient Amount")
//     }else{
//         mybalance -= balance.Amount
//         console.log(`Your current balance is ${mybalance}`)
//     }
// }else if(Operation.option == "CheckBalance" ){
//     console.log(`Your Current Balance is ${mybalance}`)
// }
// else if(Operation.option == "FastCash"){
//     let fast = await inquirer.prompt({
//         name:"cash",
//         type:"list",
//         message:"Select the Fast Cash",
//         choices:["2000","4000","5000","7500","15000"]
//     })
//     if(fast.cash > mybalance){
//         console.log("Insufficient Amount")
//     }else{
//         mybalance -= fast.cash
//         console.log(`Your current balance is ${mybalance}`)
//     }
// }
let myPin = 1234;
let mybalance = 10000;
let input = await inquirer.prompt({
    name: "Atm",
    type: "input",
    message: "Enter your Atm card \n Press Enter"
});
let pin = await inquirer.prompt({
    name: "pinNumber",
    type: "number",
    message: "Please Enter your pin number"
});
if (pin.pinNumber === myPin) {
    console.log("Welcome to the Atm Machine");
}
else {
    console.log("Incorrect Pin Number");
}
let Operation = await inquirer.prompt({
    name: "Option",
    type: "list",
    message: "What would you like to do",
    choices: ["Widthdraw", "CheckBalance", "FastCash"]
});
if (Operation.Option == "Widthdraw") {
    let amount = await inquirer.prompt({
        name: "width",
        type: "number",
        message: "How much money would you like to Widthdraw"
    });
    if (amount.width > mybalance) {
        console.log("Insufficient Balance");
    }
    else {
        mybalance -= amount.width;
        console.log("Your current balance is " + mybalance);
    }
}
if (Operation.Option === "CheckBalance") {
    console.log(`Your Current Balance is ${mybalance}`);
}
if (Operation.Option == "FastCash") {
    let cash = await inquirer.prompt({
        name: "fast",
        type: "list",
        message: "How much money would you like to widthdraw",
        choices: ["2000", "4000", "6000", "7500", "15000"]
    });
    if (cash.fast > mybalance) {
        console.log("Insufficient Balance");
    }
    else {
        mybalance -= cash.fast;
        console.log("Your current balace is " + mybalance);
    }
}
