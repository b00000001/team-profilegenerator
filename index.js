const inquirer = require("inquirer");
const { setupQuestions } = require("./src/questions");
const render = require("./lib/htmlRenderer");
const fs = require("fs");

const employees = require("./src/questions");

init = () => {
	setupQuestions();
};

init();
