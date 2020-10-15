// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// declare class 'Intern' and it extendes the 'Employee.js" file we just created with the object
class Intern extends Employee {
    // then pulls the input for these properties
  constructor(name, id, email, schoolName) {
    super(name, id, email);
    this.school = schoolName;
  }
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
}
module.exports = Intern; 
