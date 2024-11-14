function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  const next = head.next;
  head.next = swapPairs(next.next);
  next.next = head;
  return next;
};

const node = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

node.next = node2;
node2.next = node3;
console.log(swapPairs(node)); // 2 -> 1 -> 3
