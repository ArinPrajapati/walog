/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
  let totalPoints = 0;

  const process = (str, sub1, points) => {
    let stack = [];
    let score = 0;

    for (let char of str) {
      stack.push(char);
      if (
        stack.length >= 2 &&
        stack[stack.length - 2] + stack[stack.length - 1] === sub1
      ) {
        stack.pop();
        stack.pop();
        score += points;
      }
    }

    return [stack.join(""), score];
  };

  if (x >= y) {
    let [afterFirst, score1] = process(s, "ab", x);
    let [afterSecond, score2] = process(afterFirst, "ba", y);
    totalPoints = score1 + score2;
  } else {
    let [afterFirst, score1] = process(s, "ba", y);
    let [finalString, score2] = process(afterFirst, "ab", x);
    totalPoints = score1 + score2;
  }

  return totalPoints;
};

console.log(maximumGain("cdbcbbaaabab", 4, 5)); // Output: 19
