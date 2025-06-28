
function NegativeNumberCount(arr){
    let negCount = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){    
            negCount  += 1        
        }
    }
    return negCount;
}

const arr = [-1, 0, 10, -7, 6, -11]

const totalNegativeCount = NegativeNumberCount(arr);

console.log(`Total Negative Count of [${arr}]`, totalNegativeCount

)
