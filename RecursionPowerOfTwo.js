function powerOfTwo(n){
    return (n <= 1) ? n == 1 : powerOfTwo(n/2);
}

const n = 3;

console.log("powerOfTwo(n);", powerOfTwo(n))