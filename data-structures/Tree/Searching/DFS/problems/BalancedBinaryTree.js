function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  let balanced = true;
  if (root === null) {
    return true;
  }
  const dfs = (node) => {
    if (node === null) {
      return 0;
    }
    const left = dfs(node.left);
    const right = dfs(node.right);
    if (Math.abs(left - right) > 1) {
      balanced = false;
    }
    return Math.max(left, right) + 1;
  };
  dfs(root);
  return balanced;
};

// 1- 1 , 2 - 2 , 3- 4

const a = new TreeNode(3);
const b = new TreeNode(9);
const c = new TreeNode(20);
const d = new TreeNode(15);
const e = new TreeNode(7);

a.left = b;
a.right = c;
c.left = d;
c.right = e;

console.log(isBalanced(a)); // true
