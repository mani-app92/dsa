function recursionSum(n){
    if(n===0) {
        return 0
    };
    
    return n + recursionSum(n-1)
}

const n = 5;

console.log("recursionSum(n);", recursionSum(n))