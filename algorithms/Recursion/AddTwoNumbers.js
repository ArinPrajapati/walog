function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  const adder = (l1, l2, carry) => {
    if (l1 === null && l2 === null) {
      return carry > 0 ? new ListNode(carry) : null;
    }
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10); // if sum is greater than 10, carry will be 1 like sum is 12 then carry will be 1
    const node = new ListNode(sum % 10); // we take the last digit of the sum and create a new node
    node.next = adder(l1 ? l1.next : null, l2 ? l2.next : null, carry);
    return node;
  };

  return adder(l1, l2, 0);
};

const a = new ListNode(2);
const b = new ListNode(4);
const c = new ListNode(3);

a.next = b;
b.next = c;

const d = new ListNode(5);
const e = new ListNode(6);
const f = new ListNode(4);

d.next = e;
e.next = f;


console.log(addTwoNumbers(a, d));

/// Time Complexity: O(max(m, n)) where m and n represents the length of l1 and l2 respectively.

/// example: 342 + 465 = 807
//  3 -> 4 -> 2
//  4 -> 6 -> 5
//  7 -> 0 -> 8

/// 8 -> 0 -> 7 -> null
