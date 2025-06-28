function findSecondLargestNumber(arr) {
    let tempFirstLargestNumber = -Infinity;
    let tempSecondLargestNumber = -Infinity; 

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > tempSecondLargestNumber && arr[i] < tempFirstLargestNumber){
            tempSecondLargestNumber = arr[i]
        } else if(arr[i] > tempFirstLargestNumber){
            tempSecondLargestNumber = tempFirstLargestNumber;
            tempFirstLargestNumber = arr[i]
        }
    }

    return tempSecondLargestNumber;
}

const arr = [4, 9, 0, 2, 8, 7, 1, 10, 10, 10, 9, 9];

const secondLargestNumber = findSecondLargestNumber(arr);

console.log("Second Largest Numbewr is ", secondLargestNumber);