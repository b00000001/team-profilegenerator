// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
const testMgr = new Manager("Rita", "33", "rita@rita.com", "100");
test("Can set office number via constructor argument", () => {
	const obj = testMgr;
	expect(obj.officeNumber).toEqual("100");
});

test('getRole() should return "Manager"', () => {
	const obj = testMgr;
	expect(obj.getRole()).toEqual("Manager");
});

test("Can get office number via getOffice()", () => {
	const obj = testMgr;
	expect(obj.getOfficeNumber()).toEqual("100");
});
