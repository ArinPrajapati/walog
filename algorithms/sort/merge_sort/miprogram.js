const merge_sorted_halves = (left, right) => {
  console.log("Merging:", left, right); // Log the halves being merged
  let result = [];

  while (left.length && right.length) {
    console.log("Comparing:", left[0], right[0]); // Log the comparison between first elements of left and right
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  // Log what's left in left or right before concatenation
  console.log("Left over in left:", left);
  console.log("Left over in right:", right);

  return result.concat(left).concat(right);
};

const merge_sort = (arr) => {
  console.log("Splitting:", arr); // Log the array before splitting
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = merge_sort(arr.slice(0, mid));
  const right = merge_sort(arr.slice(mid));

  return merge_sorted_halves(left, right);
};

console.log(
  "Final Sorted Array:",
  merge_sort([2, 43, 1, 3, 3, 4, 2, 4, 4, 556, 4, 32, 2, 42])
);
