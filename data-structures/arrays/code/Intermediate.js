/**
 * @Question Find the largest contiguous subarray sum (Kadane’s Algorithm).
 * @param {Number[]} arr Number array to find the largest contiguous subarray sum
 * @returns {Number} largest contiguous subarray sum
 * @description This function will find the largest contiguous subarray sum using Kadane's Algorithm.
 * @example largestContiguousSubarraySum([-2, -3, 4, -1, -2, 1, 5, -3]) => 7
 * @example largestContiguousSubarraySum([1, 2, 3, 4, -2, 6, -8, 3]) => 12
 * @example largestContiguousSubarraySum([1, 2, 3, 4, -2, 6, -8, 3]) => 12
 * @author Arin
 */
const largestContiguousSubarraySum = (arr) => {
  if (arr.length == 1) {
    return arr[0];
  }
  if (arr.length == 0) {
    return 0;
  }
  let globalMax = arr[0];
  let localMax = 0; // this should be 0, not Number.MIN_SAFE_INTEGER to handle all negative numbers

  for (let i = 0; i < arr.length; i++) {
    let int = arr[i];

    if (int > localMax + int) {
      localMax = int;
    } else {
      localMax = localMax + int;
    }
    if (globalMax < localMax) {
      globalMax = localMax;
    }
  }

  return globalMax;
};

console.log(largestContiguousSubarraySum([1, 2, 3, 4, -2, 6, -8, 3]));
exports.module = { largestContiguousSubarraySum };
