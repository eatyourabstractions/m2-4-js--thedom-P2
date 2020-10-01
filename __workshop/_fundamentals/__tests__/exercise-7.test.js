// We import (require) the function that we want to test.
const addValues = require("../exercise-7");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 7", () => {
  expect(
    addValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      { isAvailable: true }
    )
  ).toStrictEqual([
    { name: "chris", age: 23, isAvailable: true },
    { name: "liv", age: 36, isAvailable: true },
    { name: "dave", age: 43, isAvailable: true },
  ]);
  // add more tests here...
  expect(
    addValues([{ name: "Bob" }, { name: "Josie" }], { isAvailable: false })
  ).toStrictEqual([
    { name: "Bob", isAvailable: false },
    { name: "Josie", isAvailable: false },
  ]);
  // add more tests here...
  expect(
    addValues([{ name: "Bob", lastname: "dylan"}, { name: "Josie", lastname: "andThePussyCats" }], { isFamous: true })
  ).toStrictEqual([
    { name: "Bob", lastname:"dylan", isFamous: true },
    { name: "Josie", lastname:"andThePussyCats", isFamous: true },
  ]);

  expect(addValues({})).toStrictEqual(undefined);
  expect(addValues([{}],{greeting:"allo"})).toStrictEqual([{greeting:"allo"}]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
