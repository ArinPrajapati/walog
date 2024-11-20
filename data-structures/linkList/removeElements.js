function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let current = head;
  let prev = null;

  while (current) {
    if (current.val == val) {
      if (prev) {
        prev.next = current.next;
      } else {
        head = current.next;
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
const d = new ListNode(1);
const e = new ListNode(1);
const f = new ListNode(1);
const g = new ListNode(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

function printList(head) {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
}

printList(removeElements(a, 1));
