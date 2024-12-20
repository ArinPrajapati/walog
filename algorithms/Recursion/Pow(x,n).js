/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n == 0) {
    return 1;
  }
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  if (n % 2 === 0) {
    return myPow(x * x, n / 2);
  } else {
    return x * myPow(x, n - 1);
  }
};

console.log(myPow(10, 3));
console.log("--------------");
console.log(myPow(2, 10));
console.log("--------------");
console.log(myPow(2, -2));
console.log("--------------");
console.log(myPow(2, 0));
console.log("--------------");
