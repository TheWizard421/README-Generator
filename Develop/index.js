// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is your Project Name?"
    },
    {
        type:"input",
        name:"description",
        message:"Whats your description?"
    },
    {
        type:"input",
        name:"installation",
        message:"What are your installation instructions?"
    },
    {
        type:"input",
        name:"usage",
        message:"How will this be used?"
    },
    {
        
    }
];

inquirer.prompt(questions)
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
