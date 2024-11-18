// flatten
// Write a recursive function called flatten which accepts an array of arrays
// and returns a new array with all values flattened.

const flatten = (arr) => {
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) resultArr = resultArr.concat(flatten(arr));
    else resultArr.push(arr[i]);
  }
  return resultArr;
};

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1, 2, 3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1, 2, 3]
