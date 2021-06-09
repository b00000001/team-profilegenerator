const managerQuestions = [
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
		type: "confirm",
		name: "additionalManager",
		message: "Would you like to add another manager?.",
		default: "false",
	},
];

// const askQuestions = () => {};
module.exports = { managerQuestions, additionalManager };
