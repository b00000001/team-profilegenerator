const Employee = require("./Employee");
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
	constructor(name, id, email, officeNum) {
		super(name, id, email);
		this.role = "Manager";
		this.officeNum = officeNum;
	}
	getRole() {
		return this.role;
	}
	getOffice() {
		return this.officeNum;
	}
}
module.exports = Manager;
