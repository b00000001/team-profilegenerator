// Starter file provided by Instructor (03/09/2021) AC

const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
	const obj = new Employee();
	expect(obj instanceof Employee).toEqual(true);
});

test("Can set name via constructor arguments", () => {
	const obj = new Employee("Bob");
	expect(obj.name).toEqual("Bob");
});

test("Can set id via constructor argument", () => {
	const obj = new Employee("name", 12);
	expect(obj.id).toEqual(12);
});

test("Can set email via constructor argument", () => {
	const obj = new Employee("Bob", 12, "bob@bob.com");
	expect(obj.email).toEqual("bob@bob.com");
});

test("Can get name via getName()", () => {
	const obj = new Employee("Bob", 12, "bob@bob.com");
	expect(obj.getName()).toEqual("Bob");
});

test("Can get id via getId()", () => {
	const obj = new Employee("Bob", 12, "bob@bob.com");
	expect(obj.getId()).toEqual(12);
});

test("Can get email via getEmail()", () => {
	const obj = new Employee("Bob", 12, "bob@bob.com");
	expect(obj.getEmail()).toEqual("bob@bob.com");
});

test('getRole() should return "Employee"', () => {
	const obj = new Employee("Bob", 12, "bob@bob.com");
	expect(obj.getRole()).toEqual("Employee");
});
