/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const stack = [];
    const len = temperatures.length
    stack.push([temperatures[len - 1], len - 1]);
    temperatures[len - 1] = 0;
    for(let i = len - 2; i >= 0; i--){
        // console.log(":stack" ,i, temperatures[i] < stack[stack.length - 1][0])
        const temp = [temperatures[i], i]
        while(stack.length){    
            if(temperatures[i] < (stack[stack.length - 1][0])){
                // console.log(":stack   ===1", (stack[stack.length - 1][1]) , i)
                temperatures[i] = (stack[stack.length - 1][1]) - i;
                break;
            } else {
                stack.pop();
            }
        }

        if(stack.length === 0){
            temperatures[i] = 0;
        }
        stack.push(temp);
    }

    return temperatures;
};

console.log("asas", dailyTemperatures([73,74,75,71,69,72,76,73]))




/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && (temperatures[i] > stack[stack.length - 1][0])) {
            const top = stack.pop();
            temperatures[top[1]] = i - top[1];
        }
        stack.push([temperatures[i], i]);
    }

    while (stack.length) {
        const top = stack.pop();
        temperatures[top[1]] = 0;
    }

    return temperatures;
};