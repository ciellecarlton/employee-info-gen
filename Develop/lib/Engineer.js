// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// declare class 'Employee' and it extendes the 'Employee.js" file we just created with the object
class Engineer extends Employee {
    // then pulls the input for these properties
  constructor(name, id, email, gitAccount) {
    super(name, id, email);
    this.github = gitAccount;
  }
  getRole() {
    return "Engineer";
  }
   getGithub() {
    return this.github;
  }
}
module.exports = Engineer; 
