function reverseString(s){
    const len = s.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        [s[i], s[len - 1 - i]] = [s[len - 1 - i], s[i]];
    }
}
const s = ["m","a","n","i"]
console.log("k", reverseString(s))