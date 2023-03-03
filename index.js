//Included packages needed for this application.
const inquirer = require('inquirer');
const fs = require('fs');
// I declare this variable globally to ensure no scope problems.
var markdownContent = "";

// This is the array of possible license choices. The reason the value contains an object is because inquirer's choices will only return the value of an array item chosen, nothing else. Making it an object gives us access to the name of the license.
// I considered adding a url for each license object to include in the readme but the readme does not include anything about a link.
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
// this is the array of questions that prompt the user
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
    // github username
    {
        type: 'input',
        message: 'Please enter your GitHub username:',
        name: 'GitHub'
    },
    // email
    {
        type: 'input',
        message: 'Please enter an email for people to reach you at:',
        name: 'email'
    }
];
// This is where the content of the readme is created using the responses from the inquirer prompts.

inquirer.prompt(questions).then((response)=>{

// Note: All of the separate concat methods are there because initially I intended to include if statements that would leave certain sections out if the response was empty, however I saw that was not included in the readme and, as such, have decided against it and don't intend to take the time to merge all the separate functions into one.

markdownContent = markdownContent.concat(`# ${response.title}
![license](${response.license.value})`);

markdownContent = markdownContent.concat(`
## Table of Contents:
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

GitHub: [${response.GitHub}](https://github.com/${response.GitHub})  
You can reach me at the following email with any questions regarding this repository:  
Email: ${response.email}`);

markdownContent = markdownContent.concat(`
## License

This application is protected under the ${response.license.name} license`);
writeToFile("newReadme.md", markdownContent);
}
);
// this is the function executes the actual writing of the file, it's called above with the content generated within the inquirer prompts to create a .md file with the information provided.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => err ? console.log(err): console.log("Success!"));
}
