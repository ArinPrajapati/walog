const functions = require("./Intermediate");

const { largestContiguousSubarraySum } = functions.module;
describe("largestContiguousSubarraySum", () => {
  test("should return the largest sum of contiguous subarray", () => {
    expect(largestContiguousSubarraySum([-2, -3, 4, -1, -2, 1, 5, -3])).toBe(7);
    expect(largestContiguousSubarraySum([1, 2, 3, 4, -2, 6, -8, 3])).toBe(14);
    expect(largestContiguousSubarraySum([1, 2, 3, 4, -2, 6, -8, 3])).toBe(14);
  });

  test("should return the element itself if array has one element", () => {
    expect(largestContiguousSubarraySum([5])).toBe(5);
    expect(largestContiguousSubarraySum([-5])).toBe(-5);
  });

  test("should return 0 for an empty array", () => {
    expect(largestContiguousSubarraySum([])).toBe(0);
  });

  test("should handle all negative numbers", () => {
    expect(largestContiguousSubarraySum([-2, -3, -1, -4])).toBe(-1);
  });

  test("should handle all positive numbers", () => {
    expect(largestContiguousSubarraySum([2, 3, 1, 4])).toBe(10);
  });
});
