function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const adder = (l1, l2) => {
    if (l1 == null) return l2;
    if (l2 == null) return l1;

    if (l1.val < l2.val) {
      l1.next = adder(l1.next, l2);
      return l1;
    } else {
      l2.next = adder(l1, l2.next);
      return l2;
    }
  };

  return adder(list1, list2);
};

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(4);

a.next = b;
b.next = c;

const d = new ListNode(1);
const e = new ListNode(3);
const f = new ListNode(4);

console.log(mergeTwoLists(a, d));
