function Node(val){
    this.val = val;
    this.next = null;
}

var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index >= this.size || index < 0 ){ return; }
    let nodeByIndex = this.head;
    let currentIndex = 0;
    while(currentIndex < index){
        nodeByIndex = nodeByIndex.next;
        currentIndex++;
    }
    return nodeByIndex.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const newNode  = new Node(val);
    if(this.head === null){
        this.head = newNode;
    } else {
        let currHead = this.head;
        while(currHead.next !== null){
            currHead = currHead.next;
        }
        currHead.next = newNode;
    }
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index > this.size || index < 0 ){ return; }
    const newNode = new Node(val);
    if(index === 0) {
        this.addAtHead(val);
    } else {
        let curr = this.head;
        for(let i=0; i < index-1; i++){
            curr = curr.next;
        }
        newNode.next = curr.next;
        curr.next = newNode;
    }
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index >= this.size || index < 0 ){ return; }
    if(index === 0){
        this.head = this.head.next;
    } else {
        let curr = this.head;
        let currentIndex = 0;
        while(currentIndex < (index - 1)){
            curr = curr.next;
            currentIndex++;
        }
        curr.next = curr.next.next;
    }
    this.size--;
};


var obj = new MyLinkedList();
// obj.addAtHead(5);
obj.addAtTail(10);
// obj.addAtIndex(2, 14);
obj.deleteAtIndex(0);
// var param_1 = obj.get(1)
// console.log("param_1", param_1)

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */