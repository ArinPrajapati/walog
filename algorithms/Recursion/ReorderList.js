function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// var reorderList = function (head) {
//   let slow = head;
//   let fast = head;

//   while (fast !== null && fast.next !== null) {
//     slow = slow.next;

//     fast = fast.next.next;
//   }

//   console.log({ slow, fast });
// };

const reorderList = (head) => {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let curr = slow;
  let temp = null;

  while (curr !== null) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  let first = head;
  let second = prev;

  while (second.next !== null) {
    temp = first.next;
    first.next = second;
    first = temp;

    temp = second.next;
    second.next = first;
    second = temp;
  }
};
const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);

a.next = b;
b.next = c;
c.next = d;
console.log(reorderList(a));
