// capitalizeFirst
// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.

const capitalizeFirst = (arr) => {
  const result = [];

  console.log(arr);
  if (!arr.length) return result;

  result.push(arr[0][0].toUpperCase() + arr[0].slice(1));
  return result.concat(capitalizeFirst(arr.slice(1)));
};

console.log(capitalizeFirst(["book", "pen", "pencil"]));

/// [Book], [Pen], [Pencil]
// concat [Book, Pen, Pencil]
