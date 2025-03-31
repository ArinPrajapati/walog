/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const map = new Map();

  let n1 = 0;
  let n2 = 0;

  while (n1 < nums1.length) {
    let count = map.get(nums1[n1])?.count1 || 0;
    map.set(nums1[n1], { arr1: true, count1: count + 1 });
    n1++;
  }
  while (n2 < nums2.length) {
    if (map.has(nums2[n2])) {
      if (map.get(nums2[n2]).arr1) {
        let count = map.get(nums2[n2]).count2 || 0;
        let count1 = map.get(nums2[n2]).count1 || 0;
        map.set(nums2[n2], {
          arr1: true,
          arr2: true,
          count2: count + 1,
          count1,
        });
      }
    } else {
      map.set(nums2[n2], { arr2: true, count2: 1 });
    }
    n2++;
  }
  const result = [];
  for (let [key, value] of map) {
    if (value.arr1 && value.arr2) {
      let run = Math.min(value.count1, value.count2);
      for (let i = 0; i < run; i++) {
        result.push(key);
      }
    }
  }
  return result;
};

console.log(intersection([1, 2, 2, 1], [2, 2])); // [4, 6]

// Given two integer arrays nums1 and nums2, return an array of their
// intersection
// . Each element in the result must be unique and you may return the result in any order.
