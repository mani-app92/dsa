// function recursionSumArray(arr){
//     if(arr.length < 2){
//         return arr[0];
//     }
//     return arr[0] + recursionSumArray(arr.slice(1));
// }

// const n = [5, 3,2,0,1,6,7,8,9];

// console.log("recursionSum(n);", recursionSumArray(n))

function recursionSumArray(arr){
    const oddValue = arr[0] % 2 !== 0 ? arr[0] : 0;
    if(arr.length < 2){
        return oddValue
    } 
    return oddValue + recursionSumArray(arr.slice(1));
}

const n = [5,3,11,1];

console.log("recursionSum(n);", recursionSumArray(n))