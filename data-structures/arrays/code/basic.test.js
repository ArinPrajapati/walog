const funtion = require("./basic");
const {
  findUnion,
  findIntersection,
  findKthMaxMin,
  reverseArray,
  SortArrayWithoutSorting,
  moveNegativeElements,
  moveNegativeElements2,
  RotateArrayByK
} = funtion.module;

describe("Array findUnion function", () => {
  test("should return the union of two sorted arrays", () => {
    const arr1 = [1, 2, 4, 5, 6];
    const arr2 = [2, 3, 5, 7];
    const result = findUnion(arr1, arr2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test("should return the union when one array is empty", () => {
    const arr1 = [];
    const arr2 = [2, 3, 5, 7];
    const result = findUnion(arr1, arr2);
    expect(result).toEqual([2, 3, 5, 7]);
  });

  test("should return the union when both arrays are empty", () => {
    const arr1 = [];
    const arr2 = [];
    const result = findUnion(arr1, arr2);
    expect(result).toEqual([]);
  });

  test("should return the union when arrays have no common elements", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const result = findUnion(arr1, arr2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("should return the union when arrays have all common elements", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    const result = findUnion(arr1, arr2);
    expect(result).toEqual([1, 2, 3]);
  });

  test("should return the union with duplicates removed", () => {
    const arr1 = [1, 2, 2, 3];
    const arr2 = [2, 3, 4, 4];
    const result = findUnion(arr1, arr2);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test("should return the union when arrays have a single element in common", () => {
    const arr1 = [1, 4, 6];
    const arr2 = [2, 4, 7];
    const result = findUnion(arr1, arr2);
    expect(result).toEqual([1, 2, 4, 6, 7]);
  });
});
describe("Array reverseArray function", () => {
  test("should return the reversed array for a non-empty array", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = reverseArray(arr);
    expect(result).toEqual([5, 4, 3, 2, 1]);
  });

  test("should return an empty array when input is an empty array", () => {
    const arr = [];
    const result = reverseArray(arr);
    expect(result).toEqual([]);
  });

  test("should return the same array when input has one element", () => {
    const arr = [1];
    const result = reverseArray(arr);
    expect(result).toEqual([1]);
  });

  test("should handle an array with duplicate elements", () => {
    const arr = [1, 2, 2, 3];
    const result = reverseArray(arr);
    expect(result).toEqual([3, 2, 2, 1]);
  });

  test("should handle an array with negative numbers", () => {
    const arr = [-1, -2, -3, -4];
    const result = reverseArray(arr);
    expect(result).toEqual([-4, -3, -2, -1]);
  });
});
describe("Array findKthMaxMin function", () => {
  test("should return correct Kth min and max for sorted array", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = findKthMaxMin(arr, 2);
    expect(result).toBe("2, 4");
  });

  test("should return correct values for unsorted array", () => {
    const arr = [5, 2, 4, 1, 3];
    const result = findKthMaxMin(arr, 3);
    expect(result).toBe("3, 3");
  });

  test("should handle k=1 (min and max)", () => {
    const arr = [5, 2, 4, 1, 3];
    const result = findKthMaxMin(arr, 1);
    expect(result).toBe("1, 5");
  });

  test("should handle array with duplicates", () => {
    const arr = [1, 2, 2, 3, 3, 4];
    const result = findKthMaxMin(arr, 2);
    expect(result).toBe("2, 3");
  });
});

describe("Array findIntersection function", () => {
  test("should return intersection of two sorted arrays", () => {
    const arr1 = [1, 2, 4, 5, 6];
    const arr2 = [2, 3, 5, 7];
    const result = findIntersection(arr1, arr2);
    expect(result).toEqual([2, 5]);
  });

  test("should return empty array when no common elements", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const result = findIntersection(arr1, arr2);
    expect(result).toEqual([]);
  });

  test("should return intersection with duplicates removed", () => {
    const arr1 = [1, 2, 2, 3];
    const arr2 = [2, 2, 3, 4];
    const result = findIntersection(arr1, arr2);
    expect(result).toEqual([2, 3]);
  });

  test("should handle when one array is empty", () => {
    const arr1 = [];
    const arr2 = [1, 2, 3];
    const result = findIntersection(arr1, arr2);
    expect(result).toEqual([]);
  });

  test("should handle identical arrays", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    const result = findIntersection(arr1, arr2);
    expect(result).toEqual([1, 2, 3]);
  });
});

describe("Array SortArrayWithoutSorting function", () => {
  test("should sort an array of 0s, 1s, and 2s", () => {
    const arr = [0, 1, 2, 0, 1, 2];
    const result = SortArrayWithoutSorting(arr);
    expect(result).toEqual([0, 0, 1, 1, 2, 2]);
  });

  test("should handle an array with more 0s", () => {
    const arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
    const result = SortArrayWithoutSorting(arr);
    expect(result).toEqual([0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]);
  });

  test("should handle an array with more 1s", () => {
    const arr = [1, 1, 1, 0, 2, 1, 0, 2, 1, 1];
    const result = SortArrayWithoutSorting(arr);
    expect(result).toEqual([0, 0, 1, 1, 1, 1, 1, 1, 2, 2]);
  });

  test("should handle an array with more 2s", () => {
    const arr = [2, 2, 2, 0, 1, 2, 0, 1, 2, 2];
    const result = SortArrayWithoutSorting(arr);
    expect(result).toEqual([0, 0, 1, 1, 2, 2, 2, 2, 2, 2]);
  });

  test("should handle an array with only 0s", () => {
    const arr = [0, 0, 0, 0, 0];
    const result = SortArrayWithoutSorting(arr);
    expect(result).toEqual([0, 0, 0, 0, 0]);
  });

  test("should handle an array with only 1s", () => {
    const arr = [1, 1, 1, 1, 1];
    const result = SortArrayWithoutSorting(arr);
    expect(result).toEqual([1, 1, 1, 1, 1]);
  });

  test("should handle an array with only 2s", () => {
    const arr = [2, 2, 2, 2, 2];
    const result = SortArrayWithoutSorting(arr);
    expect(result).toEqual([2, 2, 2, 2, 2]);
  });

  test("should handle an empty array", () => {
    const arr = [];
    const result = SortArrayWithoutSorting(arr);
    expect(result).toEqual([]);
  });

  test("should handle an array with one element", () => {
    const arr = [1];
    const result = SortArrayWithoutSorting(arr);
    expect(result).toEqual([1]);
  });
});
describe("Array moveNegativeElements function", () => {
  test("should move all negative elements to one side", () => {
    const arr = [1, -1, 3, 2, -7, -5, 11, 6];
    const result = moveNegativeElements(arr);
    expect(result).toEqual([-1, -7, -5, 1, 3, 2, 11, 6]);
  });

  test("should handle an array with all negative elements", () => {
    const arr = [-1, -2, -3, -4, -5];
    const result = moveNegativeElements(arr);
    expect(result).toEqual([-1, -2, -3, -4, -5]);
  });

  test("should handle an array with all positive elements", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = moveNegativeElements(arr);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test("should handle an array with no elements", () => {
    const arr = [];
    const result = moveNegativeElements(arr);
    expect(result).toEqual([]);
  });

  test("should handle an array with one negative element", () => {
    const arr = [-1];
    const result = moveNegativeElements(arr);
    expect(result).toEqual([-1]);
  });

  test("should handle an array with one positive element", () => {
    const arr = [1];
    const result = moveNegativeElements(arr);
    expect(result).toEqual([1]);
  });

  test("should handle an array with mixed positive and negative elements", () => {
    const arr = [0, -1, 2, -3, 4, -5];
    const result = moveNegativeElements(arr);
    expect(result).toEqual([-1, -3, -5, 0, 2, 4]);
  });
});
describe("Array moveNegativeElements2 function", () => {
  test("should move all negative elements to one side", () => {
    const arr = [1, -1, 3, 2, -7, -5, 11, 6];
    const result = moveNegativeElements2(arr);
    expect(result.slice(0, 3).sort()).toEqual([-1, -7, -5].sort());
    expect(result.slice(3).sort()).toEqual([1, 3, 2, 11, 6].sort());
  });

  test("should handle an array with all negative elements", () => {
    const arr = [-1, -2, -3, -4, -5];
    const result = moveNegativeElements2(arr);
    expect(result).toEqual([-1, -2, -3, -4, -5]);
  });

  test("should handle an array with all positive elements", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = moveNegativeElements2(arr);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test("should handle an array with no elements", () => {
    const arr = [];
    const result = moveNegativeElements2(arr);
    expect(result).toEqual([]);
  });

  test("should handle an array with one negative element", () => {
    const arr = [-1];
    const result = moveNegativeElements2(arr);
    expect(result).toEqual([-1]);
  });

  test("should handle an array with one positive element", () => {
    const arr = [1];
    const result = moveNegativeElements2(arr);
    expect(result).toEqual([1]);
  });

  test("should handle an array with mixed positive and negative elements", () => {
    const arr = [0, -1, 2, -3, 4, -5];
    const result = moveNegativeElements2(arr);
    expect(result.slice(0, 3).sort()).toEqual([-1, -3, -5].sort());
    expect(result.slice(3).sort()).toEqual([0, 2, 4].sort());
  });
});
describe("Array RotateArrayByK function", () => {
  test("should rotate array by K elements", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const result = RotateArrayByK(arr, 3);
    expect(result).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  test("should handle rotation by 0 elements", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const result = RotateArrayByK(arr, 0);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test("should handle rotation by array length", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const result = RotateArrayByK(arr, 7);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test("should handle rotation by more than array length", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const result = RotateArrayByK(arr, 10);
    expect(result).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  test("should handle empty array", () => {
    const arr = [];
    const result = RotateArrayByK(arr, 3);
    expect(result).toEqual([]);
  });

  test("should handle array with one element", () => {
    const arr = [1];
    const result = RotateArrayByK(arr, 3);
    expect(result).toEqual([1]);
  });

  test("should handle negative rotation", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const result = RotateArrayByK(arr, -3);
    expect(result).toEqual([4, 5, 6, 7, 1, 2, 3]);
  });
});
