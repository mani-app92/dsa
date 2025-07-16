function bubbleSort(arr){
    const n = arr.length - 1;

    for(let i = 0; i < n; i++){
        let isSwapped = false;
        for(let j = 0; j < (n - i); j++){
            console.log("j", i, j);
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                isSwapped = true;
            }
        }
        if(isSwapped === false){
            break;
        }
    }
    return arr;
}

const arr = [9,1,2,3,4,5];

console.log("bubbleSort(n);", bubbleSort(arr))