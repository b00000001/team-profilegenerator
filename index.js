const inquirer = require("inquirer");
const questions = require("./lib/questions");
const handleRes = require("./src/handleRes");

init = () => {
	questions.managerQuestions();
};

init();
