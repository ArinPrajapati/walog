/**
 *
 * @param {Number[]} arr array of numbers
 * @param {Number} target traget number to search
 * @returns {Number} index of target number
 * @description Binary search is a fast search algorithm with run-time complexity of O(log n).
 * This search algorithm works on the principle of divide and conquer.
 * For this algorithm to work properly, the data collection should be in the sorted form.
 * @author Arin
 */
const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

exports.module = { binarySearch };
