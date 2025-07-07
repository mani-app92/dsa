function recursion(n){
    if(n===0) return;
    console.log(n)
    n = n - 1;
    recursion(n)
}

const n = 5;

recursion(n);