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
  if (!head || left === right) return head;

  let dummy = new ListNode(0);
  dummy.next = head;
  let prevLeft = dummy;

  for (let i = 0; i < left - 1; i++) {
    prevLeft = prevLeft.next;
  }

  let curr = prevLeft.next;
  let prev = null;

  for (let i = 0; i < right - left + 1; i++) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  prevLeft.next.next = curr;
  prevLeft.next = prev;

  return dummy.next;
};
/// ok let's plan it
// idea is the we somehow mark or point eh node before the left
// and the right node
// 1 -> 2 -> 3 -> 4 -> 5 -> null
// |              |

// like this we will have 1 and 4

/// then we will reverse the node like
// 1's next is 4 fours prev will be its next like 3 there and and 3's prev will be 2 and so on we will do it till we get to the marked node
