const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 7;
  const e = new Manager("Morgan", 1, "Morgan@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Morgan", 1, "Morgan@test.com", 7);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 7;
  const e = new Manager("Morgan", 1, "Morgan@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});