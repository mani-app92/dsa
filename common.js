function Node(val){
    this.val = val;
    this.next = null;
}
var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
}

MyLinkedList.prototype.addAtHead = function(val){
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
}
MyLinkedList.prototype.addAtTail = function(val){
    if(this.head === null){
        this.addAtHead(val)
    } else{
        const newNode = new Node(val);
        let curr = this.head;
        while(curr.next !== null){
            curr = curr.next;
        }
        curr.next = newNode;
        this.size++;
    }
}
MyLinkedList.prototype.addAtIndex = function(index, val){
    if(index < 0 || index > this.size){
        return ;
    }
    if(index === 0){
        this.addAtHead(val)
    } else {
        const newNode = new Node(val);
        let curr = this.head;
        let currIndex = 0;
        while(currIndex < index-1){
            curr = curr.next
            currIndex++;
        }
        newNode.next = curr.next;
        curr.next = newNode;
        this.size++;   
    }
}

MyLinkedList.prototype.get = function(index){
    let curr = this.head;
    let currIndex = 0
    if(index >= this.size || index < 0){
        return -1;
    } else {
        while(currIndex < index){
            curr = curr.next;
            currIndex++;
        }
    }
    return curr.val;
}
MyLinkedList.prototype.deleteAtIndex = function(index){
    if(index >= this.size || index < 0){
        return -1;
    } else if(index === this.size-1){
        this.head = null;
         this.size--;
    } else {
        let curr = this.head;
        let currIndex = 0;
        while(currIndex < index-1){
            curr = curr.next;
            currIndex++;
        }
        curr.next = curr.next.next 
        this.size--;
    }
}

const linkedList = new MyLinkedList();