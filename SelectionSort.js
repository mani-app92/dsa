function selectionSort(arr){
    const n = arr.length;
    for(let i = 0; i < n; i++){
        let minIndex = i;
        for(let j = i; j < n; j++){
            console.log("j", j)
            if(arr[minIndex] > arr[j]){
                minIndex = j
            }
        }
        if(minIndex !== i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr;
}

const arr = [9,1,2,3,4,5];

console.log("selectionSort(n);", selectionSort(arr))