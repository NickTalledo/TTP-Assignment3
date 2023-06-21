const stringFunctions = require("./stringFunctions");

describe("stringFunctions reverses strings and has a palindrome checker", () => {
  test("reverses a string", () => {
    expect(stringFunctions.reverse("hello")).toBe("olleh");
  });
  test("has a palindrome", () => {
    expect(stringFunctions.palindrome("hello")).toBe(false);
  });
});
