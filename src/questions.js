const inquirer = require("inquirer");
const manager = [];
const interns = [];
const engineers = [];
const managerQuestions = () => {
	inquirer
		.prompt([
			{
				type: "input",
				name: "managerName",
				message: "Please enter the team manager's name",
				default: "Default Manager Name",
			},
			{
				type: "input",
				name: "managerEmail",
				message: "Please enter the team manager's e-mail address.",
				default: "team@manager.com",
			},
			{
				type: "list",
				name: "newEmployee",
				message: "What type of employee would you like to add?",
				choices: ["Engineer", "Intern", "I don't want to add Employee"],
				default: "true",
			},
		])
		.then((res) => {
			makeManager(res);
			makeEmployee(res, res.newEmployee);
		});
};

const addEngineer = () => {
	inquirer
		.prompt([
			{
				type: "input",
				name: "engineerName",
				message: "Please enter the Engineer name",
				default: "Engineer Man, or Woman!",
			},
			{
				type: "input",
				name: "engineerEmail",
				message: "Please enter the Engineer's e-mail",
				default: "engineer@engineer.com",
			},
			{
				type: "input",
				name: "engineerGithub",
				message: "Please enter the Engineer's github",
				default: "http://www.github.com/engineer",
			},
			{
				type: "confirm",
				name: "newEmployee",
				message: "Do you wish to add another Employee?",
				default: true,
			},
			{
				type: "list",
				name: "newEmployeeType",
				message: "What type of employee would you like to add?",
				choices: ["Engineer", "Intern", "I don't want to add Employee"],
				when: (answer) => answer.newEmployee,
			},
		])
		.then((res) => {
			if (res.newEmployee) {
				makeEmployee(res, "newEmployeeType");
				// console.log(engineers);
			}
			// console.log(engineers);
		});
};

const addIntern = () => {
	inquirer
		.prompt([
			{
				type: "input",
				name: "internName",
				message: "Please enter the Intern name",
				default: "Engineer Man, or Woman!",
			},
			{
				type: "input",
				name: "internEmail",
				message: "Please enter the Intern's e-mail",
				default: "engineer@engineer.com",
			},
			{
				type: "input",
				name: "internSchool",
				message: "Please enter the Intern's school",
				default: "UNC",
			},
			{
				type: "confirm",
				name: "newEmployee",
				message: "Do you wish to add another Employee?",
				default: true,
			},
		])
		.then((res) => {
			if (res.newEmployee) {
				makeEmployee(res, "Intern");
				// console.log(interns);
			}
			// console.log(interns);
		});
};
const makeManager = (res) => {
	console.log("Manager Info", res);
	manager.push = res;
};
const makeEmployee = (res, type) => {
	if (res.newEmployee) {
		switch (type) {
			case "Intern":
				res.internId = Math.floor(Math.random() * 100);
				interns.push(res);
				addIntern();
				break;
			case "Engineer":
				res.engineerId = Math.floor(Math.random() * 100);
				console.log("make engineer");
				addEngineer();
				engineers.push(res);
				break;
		}
	}
};

module.exports = { managerQuestions };
