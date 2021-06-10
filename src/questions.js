const inquirer = require('inquirer');

const managerQuestions = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'managerName',
        message: "Please enter the team manager's name",
        default: 'Default Manager Name',
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: "Please enter the team manager's e-mail address.",
        default: 'team@manager.com',
      },
      {
        type: 'list',
        name: 'newEmployee',
        message: 'What type of employee would you like to add?',
        choices: ['Engineer', 'Intern', "I don't want to add Employee"],
        default: 'false',
      },
    ])
    .then((res) => {
      console.log(res);
      makeEmployee(res, res.newEmployee);
    });
};

const addEngineer = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: 'Please enter the Engineer name',
        default: 'Engineer Man, or Woman!',
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: "Please enter the Engineer's e-mail",
        default: 'engineer@engineer.com',
      },
      {
        type: 'input',
        name: 'engineerGithub',
        message: "Please enter the Engineer's github",
        default: 'http://www.github.com/engineer',
      },
      {
        type: 'confirm',
        name: 'newEmployee',
        message: 'Do you wish to add another Engineer?',
        default: false,
      },
    ])
    .then((res) => {
      if (res.newEmployee) {
        makeEmployee(res, 'Engineer');
      }
    });
};

const addIntern = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'internName',
        message: 'Please enter the Engineer name',
        default: 'Engineer Man, or Woman!',
      },
      {
        type: 'input',
        name: 'internEmail',
        message: "Please enter the Engineer's e-mail",
        default: 'engineer@engineer.com',
      },
      {
        type: 'input',
        name: 'internSchool',
        message: "Please enter the Intern's school",
        default: 'UNC',
      },
      {
        type: 'confirm',
        name: 'newEmployee',
        message: 'Do you wish to add another Intern?',
        default: false,
      },
    ])
    .then((res) => {
      if (res.newEmployee) {
        makeEmployee(res, 'Intern');
      }
    });
};
const makeEmployee = (res, type) => {
	const internId = 0;
	const engineerId = 0;
	managerOffice = 0;
  if (res.newEmployee) {
    switch (type) {
      case 'Intern':
        console.log('Intern', res);
        addIntern();
        break;
      case 'Engineer':
        console.log('Engineer');
        addEngineer();
        break;
    }
  }
  // switch (res.newEmployee) {
  // 	case 'Manager':
  // 		console.log('Add Manager');
  // 		break;
  // 	case "Engineer":
  // 		console.log("Add Engineer");
  // 		addEngineer()
  // 		break;
  // 	case "Intern":
  // 		console.log("Add Intern");
  // 		addIntern()
  // 		break;
  // 	default:
  // 		console.log("Add no thing");
  // }
};
// const askQuestions = () => {};
module.exports = { managerQuestions };
