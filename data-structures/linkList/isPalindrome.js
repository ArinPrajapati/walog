function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
function printList(head) {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) return true;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;i
  }

  let prev = null,
    current = slow;
  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  let p1 = head;
  let p2 = prev;

  while (p2) {
    if (p1.val !== p2.val) return false;
    p1 = p1.next;
    p2 = p2.next;
  }

  return true;
};

const a = new ListNode(1);
const b = new ListNode(1);
const c = new ListNode(2);
const d = new ListNode(1);
a.next = b;
b.next = c;
c.next = d;

console.log(isPalindrome(a));
