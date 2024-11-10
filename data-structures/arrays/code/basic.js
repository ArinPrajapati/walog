// reverse an array

/**
 * This is function that reverse a Array
 * @param {Number[]} arr array to be reversed
 * @returns {Number[]} reversed array
 */
const reverseArray = (arr) => {
  let n = arr.length;
  const newArray = [];
  for (i = n - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
};

//Find the “Kth” max and min element of an array.

/**
 * this is funtion that find's the Kth max and min element of an array
 * @param {Number[]} arr this will the array
 * @param {Number} n this will be the Kth term
 * @returns {string} this string will contain both number
 */
const findKthMaxMin = (arr, n) => {
  arr = arr.sort((a, b) => a - b);
  return `${arr[n - 1]}, ${arr[arr.length - n]}`;
};

// Find the union and intersection of two sorted arrays.
/**
 * @param {Number[]} arr1
 * @param {Number[]} arr2
 * @returns {Number[]} union
 */
const findUnion = (arr1, arr2) => {
  let p1 = 0;
  let p2 = 0;
  let union = [];
  while (p1 < arr1.length || p2 < arr2.length) {
    if (arr1[p1] == undefined) {
      if (union[union.length - 1] !== arr2[p2]) union.push(arr2[p2]);
      p2++;
      continue;
    }
    if (arr2[p2] == undefined) {
      if (union[union.length - 1] !== arr1[p1]) union.push(arr1[p1]);
      p1++;
      continue;
    }
    if (arr1[p1] > arr2[p2]) {
      if (union[union.length - 1] !== arr2[p2]) union.push(arr2[p2]);
      p2++;
    } else if (arr1[p1] < arr2[p2]) {
      if (union[union.length - 1] !== arr1[p1]) union.push(arr1[p1]);
      p1++;
    } else {
      if (union[union.length - 1] !== arr1[p1]) union.push(arr1[p1]);
      p1++;
      p2++;
    }
  }
  return union;
};

/**
 * @param {Number[]} arr1
 * @param {Number[]} arr2
 * @returns {Number[]} interjections
 */
const findIntersection = (arr1, arr2) => {
  let p1 = 0;
  let p2 = 0;
  let intersection = [];
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] > arr2[p2]) {
      p2++;
    } else if (arr1[p1] < arr2[p2]) {
      p1++;
    } else {
      if (intersection[intersection.length - 1] !== arr1[p1])
        intersection.push(arr1[p1]);
      p1++;
      p2++;
    }
  }
  return intersection;
};

//     Sort an array of 0s, 1s, and 2s without sorting algorithms (e.g., Dutch National Flag problem).
/**
 *
 * @param {Number[]} arr array of 0s, 1s, and 2s
 * @returns {Number[]} sorted array of 0s, 1s, and 2s
 * @description this function is sorting an array of 0s, 1s, and 2s without sorting algorithms (e.g., Dutch National Flag problem).
 * @example SortArrayWithoutSorting([0, 1, 2, 0, 1, 2]) should return [0, 0, 1, 1, 2, 2]
 * @example SortArrayWithoutSorting([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]) should return [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]
 * @author Arin
 */
const SortArrayWithoutSorting = (arr) => {
  let n = arr.length;
  let high = n - 1;
  let low = 0;
  let mid = 0;
  while (mid <= high) {
    if (arr[mid] == 1) {
      mid++;
    } else if (arr[mid] == 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] == 2) {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
};

// Move all the negative elements to one side of the array.

/**
 *
 * @param {Number[]} arr array of numbers with negative and positive numbers
 * @returns {Number[]} array with all negative numbers on one side
 * @description this function moves all the negative elements to one side of the array.
 * @example moveNegativeElements([1, -1, 3, 2, -7, -5, 11, 6]) should return [-1, -7, -5, 1, 3, 2, 11, 6]
 * @example moveNegativeElements([-1, -2, -3, -4, -5]) should return [-5, -2, -3, -4, -1]
 * @author Arin
 */
const moveNegativeElements2 = (arr) => {
  let n = arr.length;
  let p1 = 0;
  let p2 = 0;

  while (p1 < n) {
    if (arr[p1] < 0) {
      [arr[p1], arr[p2]] = [arr[p2], arr[p1]];
      p2++;
    }
    p1++;
  }

  return arr;
};
const moveNegativeElements = (arr) => {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      if (i !== j) {
        let temp = arr[i];
        arr.splice(i, 1);
        arr.splice(j, 0, temp);
      }
      j++;
    }
  }
  return arr;
};

// Rotate an array by "K" elements.

/**
 *
 * @param {Number[]} arr array of number
 * @param {Number} k number of elements to rotate
 * @returns {Number[]} rotated array
 * @description this function rotates an array by "K" elements.
 * @example RotateArrayByK([1, 2, 3, 4, 5, 6, 7], 3) should return [5, 6, 7, 1, 2, 3, 4]
 * @example RotateArrayByK([1, 2, 3, 4, 5, 6, 7], 2) should return [6, 7, 1, 2, 3, 4, 5]
 * @author Arin
 */
const RotateArrayByK = (arr, k) => {
  const n = arr.length;
  if (n === 0 || n === 1 || k === 0) return arr.slice(); // Return a copy of the array if rotation has no effect

  // Normalize k to ensure it’s within the bounds of 0 to n-1
  k = k % n;

  // If k is negative, convert it to a positive equivalent rotation
  if (k < 0) {
    k = n + k;
  }

  // If k is 0 or equal to n, no rotation is needed
  if (k === 0) return arr.slice(); // Return a copy of the array if k is 0 or a multiple of n

  // Return a new rotated array without modifying the original array
  return [...arr.slice(-k), ...arr.slice(0, n - k)];
};

exports.module = {
  reverseArray,
  findKthMaxMin,
  findUnion,
  findIntersection,
  SortArrayWithoutSorting,
  moveNegativeElements,
  moveNegativeElements2,
  RotateArrayByK,
};
