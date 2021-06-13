const inquirer = require("inquirer");
const mgr = require("../lib/Manager");
const render = require("../lib/htmlRenderer");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const fs = require("fs");
const manager = [];
const interns = [];
const engineers = [];
const employees = [];
const managerQuestions = () => {
	inquirer
		.prompt([
			{
				type: "input",
				name: "managerName",
				message: "Please enter the team manager's name",
				default: "Tim",
			},
			{
				type: "input",
				name: "employeeID",
				message: "Please enter the team manager's ID",
				default: "1002",
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
				default: "Corey Engineer",
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
				employees.push(eng);
				console.log("Engineer pushed to:", employees);
				fs.writeFileSync("test.html", render(employees), (err) => {
					console.log(err);
				});
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
					render(employees);
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
				default: "Alex Intern",
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
				employees.push(newIntern);
				fs.writeFileSync("test.html", render(employees), (err) => {
					console.log(err);
				});
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
			}
		});
};
const makeManager = (res) => {
	const newMgr = new mgr(
		res.managerName,
		res.employeeID,
		res.managerEmail,
		res.officeNumber
	);
	employees.push(newMgr);
	fs.writeFileSync("test.html", render(employees), (err) => {
		console.log(err);
	});
};

const setupQuestions = () => {
	managerQuestions();
};
module.exports = { setupQuestions, employees };
