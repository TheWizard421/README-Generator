const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown')
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
        type:"list",
        name:"license",
        message:"Please Select Licenses that Apply",
        choices:["MIT","Apache2.0","MIT/Apache-2.0","GPL"]
    },
    {
      type:"input",
      name:"test",
      message:`How do you test your Application?`
    },
    {
      type:"input",
      name:"contribution",
      message:"Please list any and all contributors"
    },
    {
      type:"input",
      name:"email",
      message:"Enter Email Address"
    },
    {
      type:"input",
      name:"github",
      message:"Enter GitHub Username"
    }
];


// TODO: Create a function to write README file
function writeToFile(data) {
fs.writeFile("README.md", data, function(err) {
    if (err) throw err
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
    console.log(answers)
    console.log(generateMarkdown(answers))   
    writeToFile(generateMarkdown(answers)) 
      })
    
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      });
}

// Function call to initialize app
init();
