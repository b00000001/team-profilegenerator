const inquirer = require("inquirer");

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
				choices: ["Engineer", "Intern", "I don't want to add more"],
				default: "false",
			},
		])
		.then((res) => {
			console.log(res);
			switch (res.newEmployee) {
				case "Engineer":
					console.log("Add Engineer");
					addEngineer();
					break;
				case "Intern":
					console.log("Add Intern");
					break;
				default:
					console.log("Add no thing");
			}
		});
};

const addEngineer = () => {
	inquirer.prompt([
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
			name: "additionalEngineer",
			message: "Do you wish to add another Engineer?",
			default: false,
		},
	]).then((res) => {
		if (res.additionalEngineer){
			addEngineer();
		}
	});
};

const addIntern = () => {
	inquirer.prompt([
		{
			type: "input",
			name: "internName",
			message: "Please enter the Engineer name",
			default: "Engineer Man, or Woman!",
		},
		{
			type: "input",
			name: "internEmail",
			message: "Please enter the Engineer's e-mail",
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
			name: "additionalIntern",
			message: "Do you wish to add another Intern?",
			default: false,
		},
	]).then((res) => {
		if (res.additionalIntern){
			addIntern()
		}
	});
};
// const askQuestions = () => {};
module.exports = { managerQuestions };
