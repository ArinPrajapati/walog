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

// Implement BFS
// find the node with the value of 6
function bfs(node) {
  const queue = [node]; // initialize the queue with the root node
  while (queue.length > 0) {
    console.log(queue);
    const current = queue.shift();
    if (current.value === 6) {
      return current;
    }
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return null;
}


console.log(bfs(a)); // Node { value: 6, left: null, right: null }