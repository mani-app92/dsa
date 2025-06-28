function findLargestNumber(arr){
    let tempLargestNumber = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > tempLargestNumber){
            tempLargestNumber = arr[i]
        }
    }

    return tempLargestNumber;

}

const arr = [-5, -0, -7, -10, -8, -17, -1, -90];

const largestNumber = findLargestNumber(arr);

console.log(`Largest Number From Array is`, largestNumber);