/**
 *
 * @param {String|Number} val this is the value of the node
 * @returns {Object} this is the node object
 * children is an array of nodes that are children of the current node
 */
function node(val) {
  this.val = val;
  this.children = [];
}

const a = new node(0);
const b = new node(1);
const c = new node(2);
const d = new node(3);

const e = new node(4);
const f = new node(5);
const g = new node(6);
const h = new node(7);

a.children.push(b);
a.children.push(c);
a.children.push(d);

b.children.push(e);
b.children.push(f);

c.children.push(g);

d.children.push(h);

const printTreebyLeve = (root) => {
  let result = [];
  let queue = [root];
  while (queue.length) {
    let currentLevel = [];
    let nextLevel = [];
    for (let node of queue) {
      currentLevel.push(node.val);
      nextLevel.push(...node.children);
    }
    result.push(currentLevel);
    queue = nextLevel;
  }
  return result;
};

console.log(printTreebyLeve(a));
