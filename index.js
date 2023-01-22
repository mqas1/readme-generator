// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();