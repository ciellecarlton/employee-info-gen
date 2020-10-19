const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
let employees = [];

// begin asking questions by making an array of the questions that apply to all roles
questions = [{
    message: "Would you like to add a positon?",
    type: "list",
    name: "newPosition",
    choices: ["yes ", "no"],

},
// asks user for their new posotion title 
{
    message: "What is the title of your new position?",
    type: "list",
    name: "positionType",
    choices: ["Engineer", "Intern", "Manager"],

},
// asks every user for the employeee ID number 
{
    message: "What is your ID?",
    type: "input",
    name: "employeeId",
    
},
// asks each user for their Email accont 
{
    message: "What is your email?",
    type: "input",
    name: "email",
},
// asks the engineer for their github
{
    message: "Enter Github username:",
    type:"input",
    name: "gituser",
    // using when to only ask this question if the user chose engineer 
    // in positionType
    when: function (answers) {
        return answers.positionType === "Engineer";
    }
},
// asks manager fot their office number
{
    message: "Enter office number:",
    type: "number",
    name: "officenumber",
    when: function (answers) {
        return answers.positionType === "Manager";
    }
},
// asks intern for their school name 
{
    message: "Enter school name:",
    type: "input",
    name: "schoolname",
    when: function (answers) {
        return answers.positionType === "Intern";
    }
}]
inquirer.prompt(questions)

.then (answers => {
    // const cielle = new Manager ("cielle", "13", "cielle@gmail.com", "206")
    // create function for each role 



    
})

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


// next steps

// 1. create manager 
// 2. in create manager callback function call 'createTeam' fuction 
// 3. the 'createTeam' function asks what role would you like to add 
// 4.  gives options "engineer, intern or i dont want to add any more members" *muliple choice questions 
// 5. based on chosen role add call funciton specific to role 
// 6. if 'done' call 'buildTeam' 
// 7. 