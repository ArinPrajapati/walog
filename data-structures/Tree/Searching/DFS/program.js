class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(2);
const b = new Node(7);
const c = new Node(5);
const d = new Node(2);
const e = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;

// Implement DFS
// find the node with the value of 6
function dfs(node) {
  const stack = [node]; // initialize the stack with the root node
  while (stack.length > 0) {
    console.log(stack);
    const current = stack.pop();
    if (current.value === 6) {
      return current;
    }
    if (current.left) {
      stack.push(current.left);
    }
    if (current.right) {
      stack.push(current.right);
    }
  } 
  return null;
}
