/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function (n) {
  let reStone = 10;
  let turn = 1;

  while (n >= reStone) {
    n -= reStone;
    reStone--;
    turn = turn === 1 ? 2 : 1;
  }

  return turn !== 1;
};

console.log(canAliceWin(12)); // true
