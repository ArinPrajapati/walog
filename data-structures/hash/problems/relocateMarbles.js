/**
 * @param {number[]} nums
 * @param {number[]} moveFrom
 * @param {number[]} moveTo
 * @return {number[]}
 */
var relocateMarbles = function (nums, moveFrom, moveTo) {
  let marbles = new Set(nums);

  for (let i = 0; i < moveFrom.length; i++) {
    if (marbles.has(moveFrom[i])) {
      marbles.delete(moveFrom[i]);
      marbles.add(moveTo[i]);
    }
  }

  return [...marbles].sort((a, b) => a - b);
};

console.log(
  relocateMarbles(
    [3, 4],
    [4, 3, 1, 2, 2, 3, 2, 4, 1],
    [3, 1, 2, 2, 3, 2, 4, 1, 1]
  )
);
// map it
// replace them
// create array
