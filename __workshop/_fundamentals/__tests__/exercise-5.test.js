// We import (require) the function that we want to test.
const addNumbers = require("../exercise-5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(addNumbers(1, 2, 3, 4, 5)).toBe(55);
  // add more tests here...
  expect(addNumbers(3,3,3)).toBe(27);
  expect(addNumbers(2,3,4,5,6,7,8)).toBe(203);
  expect(addNumbers(10,100,1000)).toBe(1010100);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
