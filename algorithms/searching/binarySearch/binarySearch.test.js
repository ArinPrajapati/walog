const functions = require("./binarySearch");

const { binarySearch } = functions.module;
describe("binarySearch", () => {
  test("should return the index of the target in a sorted array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 5;
    const result = binarySearch(arr, target);
    expect(result).toBe(4);
  });

  test("should return -1 if the target is not in the array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 11;
    const result = binarySearch(arr, target);
    expect(result).toBe(-1);
  });

  test("should return the index of the target in a single-element array", () => {
    const arr = [5];
    const target = 5;
    const result = binarySearch(arr, target);
    expect(result).toBe(0);
  });

  test("should return -1 if the target is not in a single-element array", () => {
    const arr = [5];
    const target = 3;
    const result = binarySearch(arr, target);
    expect(result).toBe(-1);
  });

  test("should return the index of the target in an array with negative numbers", () => {
    const arr = [-10, -5, 0, 5, 10];
    const target = -5;
    const result = binarySearch(arr, target);
    expect(result).toBe(1);
  });

  test("should return -1 if the array is empty", () => {
    const arr = [];
    const target = 5;
    const result = binarySearch(arr, target);
    expect(result).toBe(-1);
  });

  test("should return the index of the target in an array with all identical elements", () => {
    const arr = [1, 1, 1, 1, 1];
    const target = 1;
    const result = binarySearch(arr, target);
    expect(result).toBe(2);
  });

  test("should return the index of the target in an array with floating point numbers", () => {
    const arr = [1.1, 2.2, 3.3, 4.4, 5.5];
    const target = 3.3;
    const result = binarySearch(arr, target);
    expect(result).toBe(2);
  });

  test("should return the index of the target in an array with large numbers", () => {
    const arr = [1000000, 2000000, 3000000, 4000000, 5000000];
    const target = 4000000;
    const result = binarySearch(arr, target);
    expect(result).toBe(3);
  });
});
