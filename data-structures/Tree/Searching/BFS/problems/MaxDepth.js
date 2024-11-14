function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) return 0;
  let queue = [root];
  let depth = 1;
  while (queue.length > 0) {
    console.log(queue);
    console.log(depth);
    depth++;
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
  return depth;
};
// [1,2,3,4,null,null,5]

const a = new TreeNode(1);
const b = new TreeNode(2);
const c = new TreeNode(3);
const d = new TreeNode(4);
const e = new TreeNode(5);

a.left = b;
a.right = c;
b.left = d;
b.right = e;

console.log(maxDepth(a)); // 3

exports.module = {
  maxDepth,
  TreeNode,
};
