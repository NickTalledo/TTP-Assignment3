const algorithms = require("./algorithms");

describe("algorithms has twoSum, reverseString", () => {
  test("twoSum", () => {
    expect(algorithms.twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  test("reverses a string", () => {
    expect(algorithms.reverseString("hello")).toBe("olleh");
  });
  test("longest substring without repeating characters", () => {
    expect(algorithms.lengthOfLongestSubstring("bbbbb")).toBe(1);
  });
  test("max area", () => {
    expect(algorithms.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });
});
