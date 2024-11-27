/**
 * 
 * You are given two strings s and t of the same length, and two integer arrays nextCost and previousCost.

In one operation, you can pick any index i of s, and perform either one of the following actions:

    Shift s[i] to the next letter in the alphabet. If s[i] == 'z', you should replace it with 'a'. This operation costs nextCost[j] where j is the index of s[i] in the alphabet.
    Shift s[i] to the previous letter in the alphabet. If s[i] == 'a', you should replace it with 'z'. This operation costs previousCost[j] where j is the index of s[i] in the alphabet.

The shift distance is the minimum total cost of operations required to transform s into t.

Return the shift distance from s to t.

 */

// Solution 1

/**
 * @param {string} s
 * @param {string} t
 * @param {number[]} nextCost
 * @param {number[]} previousCost
 * @return {number}
 */
var shiftDistance = function (s, t, nextCost, previousCost) {
  let shiftDistance = 0;

  for (let i = 0; i < s.length; i++) {
    let sCharCode = s.charCodeAt(i) - 97;
    let tCharCode = t.charCodeAt(i) - 97;

    if (sCharCode === tCharCode) {
      continue;
    }

    let forwardSteps = (tCharCode - sCharCode + 26) % 26;
    let forwardCost = forwardSteps * nextCost[sCharCode];

    let backwardSteps = (sCharCode - tCharCode + 26) % 26;
    let backwardCost = backwardSteps * previousCost[sCharCode];

    shiftDistance += Math.min(forwardCost, backwardCost);
  }

  return shiftDistance;
};

console.log(
  shiftDistance(
    "abab",
    "baba",
    [
      100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0,
    ],
    [
      1, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0,
    ]
  )
);
