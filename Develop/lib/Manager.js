// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// refers to the employee.js file where we have an object for getitng the card info
const Employee = require("./Employee");

// declare class 'Manager' and it extendes the 'Employee.js" file we just created with the object
class Manager extends Employee {
    // then pulls the input for these properties
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}
module.exports = Manager;



