//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
var markdownContent = "";

// This is the array of possible license choices. The reason the value contains an object is because inquirer's choices will only return the value of an array item chosen, nothing else. Making it an object gives us access to the name of the license.
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
        name: 'title'
    },
    // Description
    {
        type: 'input',
        message: 'Please enter a description of the project:',
        name: 'description'
    },
    // installation instructions
    {
        type: 'input',
        message: 'Please describe the installation instructions:',
        name: 'installation'
    },
    // usage information
    {
        type: 'input',
        message: 'Please enter the usage information for your project:',
        name: 'usage'
    },
    // license
    {
        type: 'list',
        choices: licenses,
        name: 'license'
    },
    // contributions
    {
        type: 'input',
        message: 'Please enter enter the content for the "Contributing" section',
        name: 'contributing'
    },
    // tests
    {
        type: 'input',
        message: 'Please enter the content for the "Test" section:',
        name: 'tests'
    },
    // questions
    {
        type: 'input',
        message: 'Please enter your GitHub username:',
        name: 'GitHub'
    },
    {
        type: 'input',
        message: 'Please enter an email for people to reach you at:',
        name: 'email'
    }
];
inquirer.prompt(questions).then((response)=>{

markdownContent = markdownContent.concat(`# <${response.title}>
![license](${response.license.value})`);

markdownContent = markdownContent.concat(`
# Table of Contents:
- [Description](#installation)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
`);

markdownContent = markdownContent.concat(`
## Description

${response.description}`);

markdownContent = markdownContent.concat(`
## Installation

${response.installation}`);

markdownContent = markdownContent.concat(`
## Usage

${response.usage}`);

markdownContent = markdownContent.concat(`
## Contributing

${response.contributing}
`);

markdownContent = markdownContent.concat(`
## Tests

${response.tests}`);

markdownContent = markdownContent.concat(`
## Questions

${response.email}
${response.GitHub}`);

markdownContent = markdownContent.concat(`
## License

This project is built under the ${response.license.name} license`);
writeToFile("newReadme.md", markdownContent);
}
);

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => err ? console.log(err): console.log("Success!"));
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
