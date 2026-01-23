
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

var swapPairs = function (head) {
    if (head === null || head.next === null) return head;
    
    const sentinel = new ListNode();
    sentinel.next = head;

    let dummy = sentinel;
    let curr = sentinel.next;

    while (curr && curr.next) {
        let sec = curr.next;
        let bal = curr.next.next;

        curr.next = bal
        sec.next = curr;
        dummy.next = sec;
        dummy = curr;
        curr = bal 
    }

    return sentinel.next;

};

const head = new ListNode(1, 
    new ListNode(2, 
        new ListNode(3,
            new ListNode(4)
    ))
)

console.log("Final ===> ", swapPairs(head))