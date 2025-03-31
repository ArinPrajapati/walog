/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let count = 0;
  let pivot = 0;
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      count++;
      pivot = i;
    }
  }
  if (count > 1) return false;
  if (count == 0) return true;

  let left = nums.slice(0, pivot + 1);
  let right = nums.slice(pivot + 1, n);
  let newNums = right.concat(left);
  for (let i = 0; i < n - 1; i++) {
    if (newNums[i] > newNums[i + 1]) return false;
  }
  return true;
};

console.log(check([3, 4, 5, 1, 2])); // false
//3,4,5,1,2
// find the pivot
// if more than one pivotis fond then return false
// if no pivot is found then return true
// if pivot is found then check if the array is sorted or not
// if sorted then return true else return false
// 3 4 5 1 2
// 3 4 5 -
// 0 1 2 -
// 1 2 - 3 4 5
