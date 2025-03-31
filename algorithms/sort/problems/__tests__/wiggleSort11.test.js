const wiggleSort11 = require("../wiggleSort11"); // Adjust the path as necessary

test("wiggleSort11 with sorted input", () => {
  expect(wiggleSort11([1, 2, 3, 4, 5])).toEqual([1, 3, 2, 5, 4]);
});

test("wiggleSort11 with reverse sorted input", () => {
  expect(wiggleSort11([5, 4, 3, 2, 1])).toEqual([5, 3, 4, 2, 1]);
});

test("wiggleSort11 with duplicate elements", () => {
  expect(wiggleSort11([1, 1, 2, 2, 3])).toEqual([2, 1, 3, 1, 2]);
});

test("wiggleSort11 with single element", () => {
  expect(wiggleSort11([1])).toEqual([1]);
});

test("wiggleSort11 with empty array", () => {
  expect(wiggleSort11([])).toEqual([]);
});
