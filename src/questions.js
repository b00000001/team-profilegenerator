const inquirer = require("inquirer");
const mgr = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
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
				name: "employeeID",
				message: "Please enter the team manager's ID",
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
				choices: ["Engineer", "Intern", "I am finished building my team."],
				default: "true",
			},
		])
		.then((res) => {
			res.officeNumber = Math.floor(Math.random() * 100);
			makeManager(res);
			switch (res.newEmployee) {
				case "Engineer":
					makeEngineer();
					break;
				case "Intern":
					makeIntern();
					break;
				default:
					console.log("Thank you.");
			}
			// makeEmployee(res, res.newEmployee);
		});
};

const makeEngineer = () => {
	inquirer
		.prompt([
			{
				type: "input",
				name: "engineerName",
				message: "Please enter the Engineer name",
				default: "Engineer Male or Female",
			},
			{
				type: "input",
				name: "employeeID",
				message: "Please enter the Engineer's ID",
				default: "engineer@engineer.com",
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
			engineers.push(res);
			for (engineer of engineers) {
				const eng = new Engineer(
					engineer.engineerName,
					engineer.employeeID,
					engineer.engineerEmail,
					"Engineer",
					engineer.engineerGithub
				);
				console.log("Engineer Object", eng);
			}
			switch (res.newEmployeeType) {
				case "Engineer":
					makeEngineer();
					break;
				case "Intern":
					makeIntern();
					break;
				default:
					console.log("Thank you.");
					console.log(
						`Engineers: ${engineers.length} Interns: ${interns.length}`
					);
			}
		});
};

const makeIntern = () => {
	inquirer
		.prompt([
			{
				type: "input",
				name: "internName",
				message: "Please enter the Intern name",
				default: "Intern Male or Female",
			},
			{
				type: "input",
				name: "employeeID",
				message: "Please enter the Intern's ID",
				default: "engineer@engineer.com",
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
			{
				type: "list",
				name: "newEmployeeType",
				message: "What type of employee would you like to add?",
				choices: ["Engineer", "Intern", "I don't want to add Employee"],
				when: (answer) => answer.newEmployee,
			},
		])
		.then((res) => {
			interns.push(res);
			for (intern of interns) {
				const newIntern = new Intern(
					res.internName,
					res.employeeID,
					res.internEmail,
					res.internSchool
				);
				console.log("intern object", newIntern);
			}
			switch (res.newEmployeeType) {
				case "Engineer":
					makeEngineer();
					break;
				case "Intern":
					makeIntern();
					break;
				default:
					console.log("Thank you.");
					console.log(
						`Engineers: ${engineers.length} Interns: ${interns.length}`
					);
			}
		});
};
const makeManager = (res) => {
	manager.push(res);
	const newMgr = new mgr(
		res.managerName,
		res.employeeID,
		res.managerEmail,
		res.officeNumber
	);
	console.log(newMgr);
	// manager.push = res;
};

const setupQuestions = () => {
	managerQuestions();
};
module.exports = { setupQuestions };
