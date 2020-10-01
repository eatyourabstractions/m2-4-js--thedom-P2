// We import (require) the function that we want to test.
const isPalindrome = require("../exercise-6");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 6", () => {
  expect(isPalindrome("radar")).toBe(true);
  // add more tests here...
  expect(isPalindrome("rotor")).toBe(true);
  expect(isPalindrome("level")).toBe(true);
  expect(isPalindrome("deified")).toBe(true);
  expect(isPalindrome(23)).toBe(undefined);
  expect(isPalindrome("mike matos")).toBe(false);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
