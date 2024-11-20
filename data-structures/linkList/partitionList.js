/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let lesser_List = new ListNode(0);
  let greater_list = new ListNode(0);

  let less = lesser_List;
  let greater = greater_list;

  let current = head;

  while (current !== null) {
    if (current.val < x) {
      less.next = current;
      less = less.next;
    } else {
      greater.next = current;
      greater = greater.next;
    }
    current = current.next;
  }

  greater.next = null;

  less.next = greater_list.next;

return lesser_List.next;
};
