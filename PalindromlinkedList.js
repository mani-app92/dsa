var isPalindrome = function(head) {
    let convertedArray = []
    let curr = head;
    while(curr){
        console.log("curr", curr);
        if(curr.val !== null){
             console.log("convertedArray ==>", convertedArray)
            convertedArray.push(curr.val)
        }
        curr = curr.next;
    }
    console.log("convertedArray", convertedArray)
    //checking palindrome
    for(let i=0; i < Math.floor(convertedArray.length/2); i++){
        if(Number(convertedArray[i]) !== Number(convertedArray[convertedArray.length - (i + 1)])){
            return false
        }
    }
    return true
};

const head = {
    val: 1,
    next : {
        val: 0,
        next: {
            val: 0,
            next: null
        } 
    }
}

console.log("Test", isPalindrome(head))