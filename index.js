//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    // title
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title',
    },
    // Description
    {
        type: 'input',
        message: 'Please enter a description of the project:',
        name: 'description',
    },
    // installation instructions
    {
        type: 'input',
        message: 'Please describe the installation instructions:',
        name: 'installation',
    },
    // usage information
    {
        type: 'input',
        message: 'Please enter the usage information for your project:',
        name: 'usage',
    },
    // license
    {
        type: 'input',
        message: 'Please select a license:',
        name: 'license',
    },
    // contributions
    {
        type: 'input',
        message: 'Please enter enter the content for the "Contributing" section',
        name: 'contributing',
    },
    // tests
    {
        type: 'input',
        message: 'Please enter the content for the "Test" section:',
        name: 'tests',
    },
    // questions
    {
        type: 'input',
        message: 'Please enter the content for the "Questions" section:',
        name: 'questions',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
