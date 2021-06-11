const inquirer = require("inquirer");
const questions = require("./src/questions");
const handleRes = require("./src/handleRes");

init = () => {
	questions.setupQuestions();
};

init();
