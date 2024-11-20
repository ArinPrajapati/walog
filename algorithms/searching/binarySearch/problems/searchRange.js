/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let array = Array(2).fill(-1);
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    console.log({
      low,
      high,
      mid,
    });
    if (nums[mid] == target) {
      high = mid - 1;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  if (nums[low] == target) {
    array[0] = low;
  }
  low = 0;
  high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    console.log({
      low,
      high,
      mid,
    });
    if (nums[mid] == target) {
      low = mid + 1;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  if (nums[high] == target) {
    array[1] = high;
  }

  return array;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
