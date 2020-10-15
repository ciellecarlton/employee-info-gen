// TODO: Write code to define and export the Employee class
// blueprint for employee object 
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName () {
        return this.name;
    }
    getID () {
        return this.id;
    }
    getEmail () {
        return this.email;
    }

    // get role
    getRole () {
        return "Employee"
    }
}

module.exports = Employee;