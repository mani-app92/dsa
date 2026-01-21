function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

var removeElements = function(head, val) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let current = dummy;

  while (current.next !== null) {
    if (current.next.val === val) {
      current.next = current.next.next; // remove node
    } else {
      current = current.next;
    }
  }

  return dummy.next;
};
