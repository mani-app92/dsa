function reverseNumber(x){
    let oldValue;
    if(x < 0) oldValue = x
    x = Math.abs(x);
    let r = 0;
    while (x > 0) {
        r = (10 * r) + (x % 10);
        x = Math.floor(x / 10);
    }

    if(oldValue < 0) r = -r

    const limit = Math.pow(2, 31);

    if(r > limit || r < -limit) { return 0 }

    return r 
}
const x = -125465645;
console.log(reverseNumber(x))