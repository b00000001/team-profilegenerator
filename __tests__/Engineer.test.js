// Starter file provided by Instructor (03/09/2021) AC

const Engineer = require("../lib/Engineer");
const testEng = new Engineer(
	"Bob",
	12,
	"bob@bob.com",
	"Employee",
	"http://www.github.com/bobomb"
);
test("Can set GitHUb account via constructor", () => {
	const obj = testEng;
	expect(obj.github).toEqual("http://www.github.com/bobomb");
});

test('getRole() should return "Engineer"', () => {
	const obj = testEng;
	expect(obj.getRole()).toEqual("Engineer");
});

test("Can get GitHub username via getGithub()", () => {
	const obj = testEng;
	expect(obj.getGithub()).toEqual("bobomb");
});
