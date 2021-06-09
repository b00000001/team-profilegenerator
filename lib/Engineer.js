const Employee = require("../lib/Employee");
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
	constructor(name, id, email, role, github) {
		super(name, id, email, role);
		this.github = github;
		this.role = "Engineer";
		this.githubUserName = this.github.split("/")[3];
	}
	getRole() {
		return this.role;
	}
	getGithub() {
		return this.githubUserName;
	}
}

module.exports = Engineer;
