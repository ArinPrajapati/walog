function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let current = head;
  let prev = null;

  while (current) {
    if (prev) {
      if (current.val == prev.val) {
        prev.next = current.next;
      } else {
        prev = current;
      }
    } else {
      prev = current;
    }

    current = current.next;
  }
  return head;
};
const a = new ListNode(1);
const b = new ListNode(1);
const c = new ListNode(1);
const e = new ListNode(1);
a.next = b;
b.next = c;
c.next = e;

function printList(head) {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
}
printList(deleteDuplicates(a));
// 1 1 1 1
//
