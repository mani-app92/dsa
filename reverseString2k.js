var reverseStr = function (s, k) {
    const cs = [];
    for (let i = 0; i < s.length; i++) {
        cs.push(s[i])
    }

    for (let i = 0; i < cs.length; i = i + (k * 2)) {
        const mid = Math.floor(k / 2);

        for (let x = 0; x < mid; x++) {
            const temp = cs[i + x];
            cs[i + x] = cs[i + (k - x - 1)]
            cs[i + (k - x - 1)] = temp
        }
    }
    console.log("sdfsdfsdf ===>",cs)
    return cs.join("");
};

console.log(reverseStr("abc",4));