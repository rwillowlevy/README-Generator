const inquirer = require("inquirer")
const apiCall = require("./api")
function init() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your GitHub user name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the project title?",
            name: "title"
        },
        {
            type: "input",
            message: "What is your project description?",
            name: "description"
        },
        {
            type: "input",
            message: "What did you use to install your project?",
            name: "installation"
        },
        {
            type: "input",
            message: "Who are the contributors to your project?",
            name: "contributors"
        },
         {
            type: "input",
            message: "What are the test done for the project?",
            name: "test"
        },
       
         {
            type: "input",
            message: "What is the license for this project?",
            name: "license"
        },
        {
            type: "input",
            message: "What is the usage of the project?",
            name: "usage"
        },
        {
            type: "input",
            message: "Who owns the credits for this project?",
            name: "credits"
        },
         {
            type: "input",
            message: "What email can I send additional questions to?",
            name: "email"
        }
    ])

        .then (function(response) {
            let userName = response.name 
            apiCall.getUser(userName,response)
        })
}

init();
