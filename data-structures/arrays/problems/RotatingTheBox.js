/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function (box) {
  for (let row of box) {
    let emptyIndex = row.length - 1;
    for (let i = row.length - 1; i >= 0; i--) {
      if (row[i] === "*") {
        emptyIndex = i - 1;
      } else if (row[i] === "#") {
        if (i !== emptyIndex) {
          row[emptyIndex] = "#";
          row[i] = ".";
        }
        emptyIndex--;
      }
    }
  }

  let rotatedBox = [];
  for (let i = 0; i < box[0].length; i++) {
    let newRow = [];
    for (let j = box.length - 1; j >= 0; j--) {
      newRow.push(box[j][i]);
    }
    rotatedBox.push(newRow);
  }

  return rotatedBox;
};

console.log( 
  rotateTheBox([
    ["#", ".", "*", "."],
    ["#", "#", "*", "."],
  ])
); // [[".", "#"], ["#", "#"], ["*", "*"], ["#", "."]]

/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function (box) {
  let m = box.length;
  let n = box[0].length;
  let rotatedBox = Array.from({ length: n }, () => Array(m).fill("."));

  for (let i = 0; i < m; i++) {
    let currentIndex = n - 1;

    for (let j = n - 1; j >= 0; j--) {
      let val = box[i][j];

      if (val === ".") continue;
      if (val === "*") currentIndex = j;

      rotatedBox[currentIndex][m - 1 - i] = val;
      currentIndex--;
    }
  }

  return rotatedBox;
};
