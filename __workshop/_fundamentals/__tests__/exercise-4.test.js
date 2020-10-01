// We import (require) the function that we want to test.
const count = require("../exercise-4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(
    count(
      [
        { name: "Bob", amount: 100 },
        { name: "Josie", amount: 45 },
      ],
      "amount"
    )
  ).toBe(145);
  // add more tests here...
  expect(count("howdy!")).toBe(undefined);
  expect(
    count(
      [
        {name: "goku", qi: 12000},
        {name: "vegeta", qi: 8000},
      ],
      "qi"
    )
  ).toBe(20000);
  expect(
    count(
      [
        {name: "steve jobs", worth: 50},
        {name: "bill", worth: 100},
        {name: "jeff", worth: 200},
      ],
      "worth"
    )
  ).toBe(350);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
