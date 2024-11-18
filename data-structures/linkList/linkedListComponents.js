function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function (head, nums) {};

const a = new ListNode(1);
const b = new ListNode(1);
const c = new ListNode(2);
const d = new ListNode(3);

a.next = b;
b.next = c;
c.next = d;
