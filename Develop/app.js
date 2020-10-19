const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

let teamMembers = [];


function buildPage(){
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8")
}
// begin the prompts here 
function createTeam(){
    inquirer.prompt([
        {
          type: "list",
          name: "memberChoice",
          message: "Which type of team member would you like to add?",
          choices: [
              "Manager",
            "Engineer",
            "Intern",
            "I don't want to add any more team members"
          ]
        }
        // based on the role the user choses, there will be specific questions
      ]).then(userChoice => {
        switch(userChoice.memberChoice) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
          case "Manager":
              addManager();
              break;
        default:
          buildPage();
        }
      });
}
function addManager(){
    inquirer.prompt([{
        type: "input",
        name: "managerName",
        message: "What is your manager's name?",
    },
    {
        type: "input",
        name: "managerId",
        message: "What is your manager's id?",
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is your manager's email?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your manager's office number?",
    }
    // add the answers to a var specific to the role
]).then(answers => {
    var manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
    teamMembers.push(manager);
    createTeam();
})
// prompts for next role
}
function addEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your engineer's id?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is your engineer's GitHub username?",
      }
       // add the answers to a var specific to the role and *adds to new team*
    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamMembers.push(engineer);
      createTeam();
    });
// prompts for next role
  }
  function addIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "What is your intern's name?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is your intern's id?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is your intern's school?",
      }
    //   add to team
    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamMembers.push(intern);
      createTeam();
    });
  }
  createTeam()
