function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let current = head;
  let prev = null;

  while (current !== null) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
};

function printList(head) {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
}
const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

printList(reverseList(a));
