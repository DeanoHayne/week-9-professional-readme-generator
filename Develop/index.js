// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter projects description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installations used in project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is project utilise for?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select Licence: ',
        choices: ['MIT', 'Mozilla Public 2.0', 'Apache_2.0', 'BSD_2--Clause']
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address: '
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
    }

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.error(err) : console.log(`'${fileName}' has been generated!`)
    }
    )
}


// TODO: Create a function to initialize app

function init() {
    console.log("To generate your READEME.md file please answer the following questions:")
    inquirer
        .prompt(questions)
        .then(data => writeToFile("README.md", data))
        .catch((error) => {
            console.error(error)
        });
}

// Function call to initialize app
init();
