const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "Temple";
  const e = new Intern("Gunther", 1, "Gunther@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Gunther", 1, "Gunther@test.com", "Temple");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Temple";
  const e = new Intern("Gunther", 1, "Gunther@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});