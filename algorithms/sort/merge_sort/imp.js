const merge = (left, right) => {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left).concat(right);
};

const merge_sort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftArray = merge_sort(arr.slice(0, mid));

  let rightArray = merge_sort(arr.slice(mid));

  return merge(leftArray, rightArray);
};

let a = [
  2, 23, 325, 57, 4, 3, 54, 5, 6, 5, 563, 5, 223, 65, 35, 54, 56, 34, 34,
];

console.log(merge_sort(a));
