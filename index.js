const inquirer = require("inquirer");
const questions = require("./lib/questions");
const handleRes = require("./src/handleRes");

inquirer.prompt(questions).then((res) => handleRes(res));
