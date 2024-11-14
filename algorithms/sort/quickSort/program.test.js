const quickSort = require("./program").module;

test("sorts an array of positive numbers", () => {
  expect(quickSort([3, 6, 8, 10, 1, 2, 1])).toEqual([1, 1, 2, 3, 6, 8, 10]);
});

test("sorts an array with negative numbers", () => {
  expect(quickSort([-3, -1, -7, -4, -5, -2, -6])).toEqual([
    -7, -6, -5, -4, -3, -2, -1,
  ]);
});

test("sorts an array with mixed positive and negative numbers", () => {
  expect(quickSort([3, -2, -1, 0, 2, 1])).toEqual([-2, -1, 0, 1, 2, 3]);
});

test("sorts an array with duplicate numbers", () => {
  expect(quickSort([5, 3, 8, 3, 9, 1, 5])).toEqual([1, 3, 3, 5, 5, 8, 9]);
});

test("sorts an already sorted array", () => {
  expect(quickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test("sorts a reverse sorted array", () => {
  expect(quickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});

test("sorts an array with one element", () => {
  expect(quickSort([1])).toEqual([1]);
});

test("sorts an empty array", () => {
  expect(quickSort([])).toEqual([]);
});

test("sorts an array with large numbers", () => {
  expect(quickSort([1000000, 999999, 1000001])).toEqual([
    999999, 1000000, 1000001,
  ]);
});

test("sorts an array with floating point numbers", () => {
  expect(quickSort([3.1, 2.2, 1.3])).toEqual([1.3, 2.2, 3.1]);
});

