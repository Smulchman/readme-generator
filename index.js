//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
var markdownContent = "";

var licenses = [
    {
        name: "MIT",
        value: {name: "MIT", value: "https://img.shields.io/badge/License-MIT-yellow.svg"},
        short: "MIT"
    },
    {
        name: "Apache 2.0",
        value: {name: "Apache 2.0", value: "https://img.shields.io/badge/License-Apache_2.0-blue.svg"},
        short: "Apache 2.0"
    },
    {
        name: "GNU GPL v3.0",
        value: {name: "GNU GPL v3.0", value: "https://img.shields.io/badge/License-GPLv3-blue.svg"},
        short: "GNU GPL v3"
    },
    {
        name: "Mozilla 2.0",
        value: {name: "Mozilla 2.0", value: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg"},
        short: "Mozilla 2.0"
    },
    {
        name: "Eclipse 1.0",
        value: {name: "Eclipse 1.0", value:"https://img.shields.io/badge/License-EPL_1.0-red.svg"},
        short: "Eclipse 1.0"
    }
]

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
        type: 'list',
        choices: licenses,
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
inquirer.prompt(questions).then((response)=>{
    if (response.title){
        console.log(response.title)
    };
    if (response.description){
        console.log(response.description)
    };
    if (response.installation){
        console.log(response.installation)
    };
    if (response.usage){
        console.log(response.usage)
    };
    if (response.license){
        console.log(response.license)
    };
    if (response.contributing){
        console.log(response.contributing)
    };
    if (response.tests){
        console.log(response.tests)
    };
    if (response.questions){
        console.log(response.questions)
    };
}

);

// TODO: Create a function to write README file
// const generateContent({ tile, description, installation, usage, license, contributing, tests, questions}) => {}


const fileName = "newREADME.md";
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
