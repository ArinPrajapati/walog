/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let current = head;
  let prev = null;

  while (current !== null) {
    if (current.val > left || current < right) {
      if ((prev) => left) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
      }
    }
  }
};
