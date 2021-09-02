const isBeautifulString = require("./index");

test("Empty string is not beautiful", () => {
  expect(isBeautifulString()).toBeFalsy();
  expect(isBeautifulString("")).toBeFalsy();
  expect(isBeautifulString(null)).toBeFalsy();
});

test("The string is beautiful", () => {
  expect(isBeautifulString("a")).toBeTruthy();
  expect(isBeautifulString("ab")).toBeTruthy();
  expect(isBeautifulString("aabbb")).toBeFalsy();
  expect(isBeautifulString("bbaa")).toBeTruthy();
  expect(isBeautifulString("bbbaacdafe")).toBeTruthy();
});
