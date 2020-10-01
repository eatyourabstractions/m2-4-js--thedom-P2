// We import (require) the function that we want to test.
const insert = require("../exercise-3");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 3", () => {
  expect(
    insert([{ name: "Bob" }, { name: "Josie" }], { isAvailable: false })
  ).toStrictEqual([
    { name: "Bob", isAvailable: false },
    { name: "Josie", isAvailable: false },
  ]);
  // add more tests here...
  expect(
    insert([{ name: "Bob", lastname: "dylan"}, { name: "Josie", lastname: "andThePussyCats" }], { isFamous: true })
  ).toStrictEqual([
    { name: "Bob", lastname:"dylan", isFamous: true },
    { name: "Josie", lastname:"andThePussyCats", isFamous: true },
  ]);

  expect(insert({})).toStrictEqual(undefined);
  expect(insert([{}],{greeting:"allo"})).toStrictEqual([{greeting:"allo"}]);
  
})

// More info on jest expect: https://jestjs.io/docs/en/expect