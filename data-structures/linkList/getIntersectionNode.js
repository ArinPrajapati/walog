function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const map = new Map();
  let node = headA;

  while (node) {
    map.set(node, true);
    node = node.next;
  }

  node = headB;

  while (node) {
    if (map.has(node)) {
      return node;
    }
    node = node.next;
  }

  return null;
};
