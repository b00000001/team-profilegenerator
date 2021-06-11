const inquirer = require("inquirer");
const questions = require("./src/questions");

init = () => {
	questions.setupQuestions();
};

init();
