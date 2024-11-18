/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (nums, k) {
  const arr = [];

  const resulter = (array, k, pointer) => {
    let temp = array.slice(pointer, k + pointer);

    if (k + pointer > array.length) {
      return;
    }
    let isSorted = true;
    for (let i = 1; i < temp.length; i++) {
      if (temp[i] <= temp[i - 1]) {
        isSorted = false;
        break;
      }
      if (temp[i] != temp[i - 1] + 1) {
        isSorted = false;
        break;
      }
    }

    if (isSorted) {
      arr.push(temp[temp.length - 1]);
    } else {
      arr.push(-1);
    }

    resulter(array, k, pointer + 1);
  };

  resulter(nums, k, 0);
  return arr;
};

console.log(resultsArray([1, 3, 4], 2));
