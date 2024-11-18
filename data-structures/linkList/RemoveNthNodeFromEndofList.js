function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// not a currect method
// var removeNthFromEnd = function (head, n) {
//   const map = new Map();
//   let current = head;
//   let i = 0;
//   while (current != null) {
//     map.set(i, current);
//     i++;

//     current = current.next;
//   }

//   let Node = null;

//   let curr = null;
//   for (let i = 0; i < map.size; i++) {
//     if (i !== map.size - n) {
//       if (Node === null) {
//         Node = new ListNode(map.get(i).val);
//         curr = Node;
//       } else {
//         curr.next = new ListNode(map.get(i).val);
//         curr = curr.next;
//       }
//     }
//   }
//   return Node;
// };

// currect method

var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;

  for (let i = 0; i < n + 1; i++) {
    fast = fast.next;
  }

  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
};
const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
function printList(head) {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
}

printList(removeNthFromEnd(a, 2));
