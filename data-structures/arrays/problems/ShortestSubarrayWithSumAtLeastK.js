/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
  if (nums.length == 0) return -1;
  let n = nums.length;
  let prefixSum = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }
  let minLen = n + 1;
  let deque = [];
  for (let i = 0; i <= n; i++) {
    while (deque.length > 0 && prefixSum[i] - prefixSum[deque[0]] >= k) {
      minLen = Math.min(minLen, i - deque.shift());
    }
    while (
      deque.length > 0 &&
      prefixSum[i] <= prefixSum[deque[deque.length - 1]]
    ) {
      deque.pop();
    }
    deque.push(i);
  }
  return minLen == n + 1 ? -1 : minLen;
};

console.log(shortestSubarray([77, 19, 35, 10, -14], 19)); // 1
