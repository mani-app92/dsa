function fib(n){
    if(n <= 1){
        return n
    }
    return fib(n - 2) + fib(n - 1)
}

const n = 3;

console.log("fib(n);", fib(n))