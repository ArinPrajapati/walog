const merge_sorted_halves = (left, right) => {
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
  const mid = Math.floor(arr.length / 2);
  const left = merge_sort(arr.slice(0, mid));
  const right = merge_sort(arr.slice(mid));

  return merge_sorted_halves(left, right);
};

console.log(merge_sort([2, 43, 1, 3, 3, 4, 2, 4, 4, 556, 4, 32, 2, 42]));
