import inquirer from "inquirer"

let todoList = []
let condition = true

console.log(`Welcome to to-do list Application`)

while(condition){
    let addTask = await inquirer.prompt({
        name:"task",
        type:"input",
        message:"Add Task in todo List"
    })
    todoList.push(addTask.task)
    console.log(addTask.task , "Task added successfully")

    let addMoreTask = await inquirer.prompt({
        name:"task",
        type:"confirm",
        message:"Would you like to add more task",
        default:false
    })

     condition =addMoreTask.task
}

console.log(`Your updated todoList is`,todoList)