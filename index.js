const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

let employeeInformation = [];

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "output.html");

const render = require("./render");

function makeManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please create the Manager card first (required).\n  What is the Manager's name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the Manager's email address?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the Manager's id number?"
        },
        {
            type: "list",
            name: "role",
            message: "Enter the role of this Employee:",
            choices: ["Manager"]
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the Manager's office number?"
        },
        {
            type: "list",
            name: "position",
            message: "Would you like to add another role?",
            choices: ['Engineer', 'Intern', 'Exit'],
        }
    ]).then(function (data) {
        let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        employeeInformation.push(manager);

        switch (data.position) {
            case "Engineer":
                makeEngineer();
                break;
            case "Intern":
                makeIntern();
                break;
            default:
                createHtml();
        }
    });
}
function makeEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Engineer's name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the Engineer's email address?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the Engineer's id number?"
        },
        {
            type: "input",
            name: "github",
            message: "Enter the Engineer's GitHub user name:",
        },
        {
            type: "list",
            name: "position",
            message: "Would you like to add another role?",
            choices: ['Engineer', 'Intern', 'Exit'],
        }
    ]).then(function (data) {
        let engineer = new Engineer(data.name, data.id, data.email, data.github);
        employeeInformation.push(engineer);

        switch (data.position) {
            case "Engineer":
                makeEngineer();
                break;
            case "Intern":
                makeIntern();
                break;
            default:
                createHtml();
        }
    });
}

function makeIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Intern's name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the Intern's email address?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the Intern's id number?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the name of the Intern's school?",
        },
        {
            type: "list",
            name: "position",
            message: "Would you like to add another role?",
            choices: ['Engineer', 'Intern', 'Exit'],
        }
    ]).then(function (data) {
        let intern = new Intern(data.name, data.id, data.email, data.school);
        employeeInformation.push(intern);

        switch (data.position) {
            case "Engineer":
                makeEngineer();
                break;
            case "Intern":
                makeIntern();
                break;
            default:
                createHtml();
        }
    });
}
function createHtml() {
    fs.writeFileSync(outputPath, render(employeeInformation), "utf-8")
}

makeManager();