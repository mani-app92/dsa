function recursionFactorial(n){
    return n === 1 ? n : n * recursionFactorial(n - 1);
}

const n = 6;

console.log("recursionSum(n);", recursionFactorial(n))