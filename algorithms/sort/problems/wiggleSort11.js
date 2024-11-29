/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  let n = nums.length;

  // find median
  const midIdx = Math.floor(n / 2);
  const sortedNums = [...nums].sort((a, b) => a - b);
  const mid = sortedNums[midIdx];

  // index-rewiring
  const mapIndex = (i) => (1 + 2 * i) % (n | 1);

  let i = 0;
  let j = 0;
  let k = n - 1;

  while (j <= k) {
    if (nums[mapIndex(j)] > mid) {
      [nums[mapIndex(i)], nums[mapIndex(j)]] = [
        nums[mapIndex(j)],
        nums[mapIndex(i)],
      ];
      i++;
      j++;
    } else if (nums[mapIndex(j) < mid]) {
      [nums[mapIndex(j)], nums[mapIndex(k)]] = [
        nums[mapIndex(k)],
        nums[mapIndex(j)],
      ];
      k--;
    } else {
      j++;
    }
  }
};
//
// Utilize Sorting:

// If the array is sorted, smaller and larger elements are naturally separated.
// You can interleave smaller and larger elements to achieve the pattern.
