// Packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

// Array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "How would you describe your project?",
        name: "description"
    },
    {
        type: "input",
        message: "How does one install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "How does one use your project?",
        name: "usage"
    },
    {
        type: "input",
        message: "What are the guidelines — if any — for potential contributors?",
        name: "contributing"
    },
    {
        type: "input",
        message: "Are there any tests the user can run for your project? If so, what are their instructions?",
        name: "tests"
    },
    {
        type: "list",
        message: "Which license would you like to apply to your project?",
        choices: ["None", "Apache 2.0 License", "Boost Software License 1.0", "GNU GPLv3", "MIT License", "Mozilla Public License 2.0", "The Unlicense"],
        name: "license"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
       err ? console.log(err) : console.log("Successfully created a README file!")
    );
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile("./utils/README.md", readmeContent);
    });
}   

// Function call to initialize app
init();