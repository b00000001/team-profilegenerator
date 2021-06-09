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
			if (res.newEmployee === "Engineer" || "Intern") {
				console.log("New Employee Add");
			} else {
				console.log("no new employee to add");
			}
		});
};

// const askQuestions = () => {};
module.exports = { managerQuestions };
