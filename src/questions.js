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
	console.log(manager);
	// manager.push = res;
};

const setupQuestions = () => {
	managerQuestions();
};
module.exports = { setupQuestions };
