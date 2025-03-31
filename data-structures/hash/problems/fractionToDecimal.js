/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  if (numerator === 0) return "0";

  let result = "";

  if (Math.sign(numerator) !== Math.sign(denominator)) {
    result += "-";
  }

  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);

  const integerPart = Math.floor(numerator / denominator);
  result += integerPart;

  let remainder = numerator % denominator;

  if (remainder === 0) return result;

  result += ".";

  const remainderMap = new Map();
  let fractionalPart = "";

  while (remainder !== 0) {
    if (remainderMap.has(remainder)) {
      const repeatIndex = remainderMap.get(remainder);
      fractionalPart =
        fractionalPart.substring(0, repeatIndex) +
        "(" +
        fractionalPart.substring(repeatIndex) +
        ")";
      return result + fractionalPart;
    }

    remainderMap.set(remainder, fractionalPart.length);

    remainder *= 10;
    fractionalPart += Math.floor(remainder / denominator);
    remainder %= denominator;
  }

  return result + fractionalPart;
};

// frist take the fraction mean e.g 4/333 == 0.012012012
// take everything before "." in one string = 0
// take a pointer
// 0 1 2 0 1 2 0 1 2
// -----------------
// take the first elment check for second accurence and then the check if element on rhs with fist element is equal to same length

console.log(fractionToDecimal(4, 333));
