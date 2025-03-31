/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (divisor == 1) return dividend;
  let p = Math.abs(dividend);
  let q = 0;
  let a = Math.abs(divisor);
  while (p >= a) {
    p -= a;
    q += 1;
  }
  if (q > Math.pow(2, 31) - 1) q = Math.pow(2, 31) - 1;
  return divisor * dividend > 0 ? q : -q;
};

var divide = function (dividend, divisor) {
  if (dividend === 0) return 0;
  if (divisor === 1)
    return Math.min(Math.max(dividend, -(2 ** 31)), 2 ** 31 - 1);
  if (divisor === -1)
    return Math.min(Math.max(-dividend, -(2 ** 31)), 2 ** 31 - 1);

  const isNegative = dividend < 0 !== divisor < 0;

  let p = Math.abs(dividend);
  let a = Math.abs(divisor);
  let result = 0;

  while (p >= a) {
    let temp = a,
      multiple = 1;
    while (p >= temp << 1) {
      temp <<= 1;
      multiple <<= 1;
    }
    p -= temp;
    result += multiple;
  }

  result = isNegative ? -result : result;
  return Math.min(Math.max(result, -2147483648), 2147483647);
};
console.log(divide(-2147483648, 2));
