/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var maxRemoval = function (nums, queries) {
  const n = nums.length;
  const m = queries.length;

  if (nums.every((num) => num === 0)) {
    return queries.length;
  }

  let coverage = new Array(n).fill(0);
  for (let [l, r] of queries) {
    for (let i = l; i <= r; i++) {
      coverage[i]++;
    }
  }

  let vernolipe = [...nums];

  for (let i = 0; i < n; i++) {
    if (coverage[i] < nums[i]) {
      return -1;
    }
  }

  let dp = new Array(1 << m).fill(Infinity);
  dp[0] = 0;

  for (let mask = 0; mask < 1 << m; mask++) {
    let current = new Array(n).fill(0);

    for (let i = 0; i < m; i++) {
      if ((mask & (1 << i)) !== 0) {
        let [l, r] = queries[i];
        for (let j = l; j <= r; j++) {
          current[j]++;
        }
      }
    }

    let possible = true;
    for (let i = 0; i < n; i++) {
      if (current[i] < nums[i]) {
        possible = false;
        break;
      }
    }

    if (possible) {
      dp[mask] = countBits(mask);
    }
  }

  let minQueries = Math.min(...dp);
  return queries.length - minQueries;
};

function countBits(n) {
  let count = 0;
  while (n) {
    count += n & 1;
    n >>= 1;
  }
  return count;
}
