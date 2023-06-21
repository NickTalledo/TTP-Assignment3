const mathFunctions = require("./mathFunctions");

describe("mathFunctions includes add, subtract, multiply, divide", () => {
  test("add(1,2) => 3", () => {
    expect(mathFunctions.add(1, 2)).toBe(3);
  });

  test("subtract(2,1) => 1", () => {
    expect(mathFunctions.subtract(2, 1)).toBe(1);
  });

  test("multiply(1,2) => 2", () => {
    expect(mathFunctions.multiply(1, 2)).toBe(2);
  });

  test("divide(4,2) =>2", () => {
    expect(mathFunctions.divide(4, 2)).toBe(2);
  });
});
