function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const map = new Map();
  if (head.next == null) return false;
  let run = true;
  let current = head;
  while (run) {
    if (current === null) {
      run = false;
      return false;
    }
    if (map.get(current)) {
      run = false;
      return true;
    }
    map.set(current, true);
    current = current.next;
  }
};

// [1,2]

const a = new ListNode(1);
const b = new ListNode(2);
a.next = b;

console.log(hasCycle(a));
