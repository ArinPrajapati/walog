/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  let i = nums.length - 1;
  while (i >= 0) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
    i--;
  }
  return nums.length;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let n = nums.length;
  let expectedSum = (n * (n + 1)) / 2; // Sum of numbers from 0 to n
  let actualSum = nums.reduce((sum, num) => sum + num, 0); // Sum of array elements
  return expectedSum - actualSum; // The difference is the missing number
};

console.log(missingNumber([0, 1])); // Output: 2

console.log(missingNumber([0, 1]));
