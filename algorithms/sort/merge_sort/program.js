const mergeSort = (arr) => {
  if (arr.length <= 1) return arr; // Base case

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid)); // Recursively sort the left half
  let right = mergeSort(arr.slice(mid)); // Recursively sort the right half

  // Merge the sorted halves
  return merge(left, right);
};

const merge = (left, right) => {
  let result = [];
  let i = 0,
    j = 0;

  // Compare elements from left and right arrays and add the smallest to the result
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add any remaining elements from the left and right arrays
  return result.concat(left.slice(i)).concat(right.slice(j));
};

let a = [32, 23, 2, 33, 34, 3, 45, 34, 5, 345];
console.log(mergeSort(a));
