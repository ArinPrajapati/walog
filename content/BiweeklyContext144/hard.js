/**
 * @param {number[][]} fruits
 * @return {number}
 */
var maxFruits = function (fruits) {
  const n = fruits.length;
  const ravolthine = fruits.map((row) => [...row]);

  const memo = new Map();

  const encode = (x1, y1, x2, y2, x3, y3, step) => {
    return `${x1},${y1},${x2},${y2},${x3},${y3},${step}`;
  };

  const dfs = (x1, y1, x2, y2, x3, y3, step) => {
    if (step === n - 1) {
      return x1 === n - 1 &&
        y1 === n - 1 &&
        x2 === n - 1 &&
        y2 === n - 1 &&
        x3 === n - 1 &&
        y3 === n - 1
        ? 0
        : -Infinity;
    }

    const key = encode(x1, y1, x2, y2, x3, y3, step);
    if (memo.has(key)) return memo.get(key);

    let maxFruit = -Infinity;

    const moves1 = [
      [1, 1],
      [1, 0],
      [0, 1],
    ];
    const moves2 = [
      [1, -1],
      [1, 0],
      [1, 1],
    ];
    const moves3 = [
      [-1, 1],
      [0, 1],
      [1, 1],
    ];

    for (const [dx1, dy1] of moves1) {
      const nx1 = x1 + dx1,
        ny1 = y1 + dy1;
      if (nx1 >= n || ny1 >= n) continue;

      for (const [dx2, dy2] of moves2) {
        const nx2 = x2 + dx2,
          ny2 = y2 + dy2;
        if (nx2 >= n || ny2 < 0 || ny2 >= n) continue;

        for (const [dx3, dy3] of moves3) {
          const nx3 = x3 + dx3,
            ny3 = y3 + dy3;
          if (nx3 < 0 || nx3 >= n || ny3 >= n) continue;

          let fruit = 0;
          const positions = new Set([
            `${nx1},${ny1}`,
            `${nx2},${ny2}`,
            `${nx3},${ny3}`,
          ]);

          for (const pos of positions) {
            const [i, j] = pos.split(",").map(Number);
            fruit += fruits[i][j];
          }

          const nextFruit = dfs(nx1, ny1, nx2, ny2, nx3, ny3, step + 1);
          if (nextFruit !== -Infinity) {
            maxFruit = Math.max(maxFruit, fruit + nextFruit);
          }
        }
      }
    }

    memo.set(key, maxFruit);
    return maxFruit;
  };

  const initial = fruits[0][0] + fruits[0][n - 1] + fruits[n - 1][0];
  const result = dfs(0, 0, 0, n - 1, n - 1, 0, 0) + initial;

  return result;
};

console.log(
  maxFruits([
    [
      [9, 16, 18, 13, 20, 10, 9],
      [16, 15, 1, 7, 7, 3, 17],
      [17, 7, 17, 5, 12, 10, 8],
      [15, 0, 18, 6, 16, 7, 14],
      [17, 5, 10, 6, 7, 20, 19],
      [2, 20, 6, 17, 12, 19, 5],
      [7, 15, 15, 7, 20, 16, 16],
    ],
  ])
);
