function Node(val, next) {
  this.val = val ? val : 0;
  this.next = next ? next : null;
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
a.next = b;
b.next = c;
c.next = a;

function insertAtHead(head, val) {
  const newNode = new Node(val, head);
  return newNode;
}

function insertAtTail(head, val) {
  const newNode = new Node(val);
  let current = head;
  while (current.next) {
    current = current.next;
  }
}

function removeByValue(head, val) {
  let current = head;
  let prev = null;
  while (current) {
    if (current.val === val) {
      if (prev) {
        prev.next = current.next;
      } else {
        head = current.next;
      }
      return head;
    }
    prev = current;
    current = current.next;
  }
}
