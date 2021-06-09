// Starter file provided by Instructor (03/09/2021) AC
const Intern = require("../lib/Intern");
const testIntern = new Intern("Tammy", 12, "tammy@tammy.com", "UNC");
test("Can set school via constructor", () => {
	const obj = testIntern;
	expect(obj.school).toEqual("UNC");
});

test('getRole() should return "Intern"', () => {
	const obj = testIntern;
	expect(obj.getRole()).toEqual("Intern");
});

test("Can get school via getSchool()", () => {
	const obj = testIntern;
	expect(obj.getSchool()).toEqual("UNC");
});
