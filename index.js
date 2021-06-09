const inquirer = require("inquirer");
const questions = require("./lib/questions");
const handleRes = require("./src/handleRes");

inquirer.prompt(questions.managerQuestions).then((res) => {
	res.mgrCount = 0;
	handleRes(res);
});
