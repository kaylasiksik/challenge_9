// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer");
const { default: Choices } = require("inquirer/lib/objects/choices");
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What would you like the title of your project to be?'
},
{
    type: 'input',
    name: 'description',
    message: 'Describe your project.'
},
{
    type: 'input',
    name: 'installation',
    message: 'Which dependancies were installed for this project?'
},
{
    type: 'input',
    name: 'usage',
    message: 'Which steps need to be performed to get your project up and running?'
},
{
    type: 'list',
    name: 'license',
    message: 'Which, if any, liscence does your project use?',
    choices: ['None', 'MIT', 'Apache', 'Boost']
},
{
    type: "input",
    name: "contribution",
    message: "Who contributed to this project, and what did each contributor do?"
},
{
    type: "input",
    name: "tests",
    message: "Which test(s) did you use to test your project?"
},
{
    type: "input",
    name: "github",
    message: "Please enter your GitHub username."
},
{
    type: "input",
    name: "email",
    message: "Please enter your email address."
}];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(data);
        if (err) {
            console.log(err)
        } else {
            console.log("Success. README created.")
        };
    });
};
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data);
    });
};

// Function call to initialize app
init();
