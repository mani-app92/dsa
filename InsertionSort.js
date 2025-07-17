function insertionSort(arr){
    const n = arr.length;
    for(let i = 1; i < n; i++){
        let curr = arr[i];
        let prev = i - 1;
        while(arr[prev] > curr && prev >= 0){
            arr[prev+1] = arr[prev];
            prev--
        }
        arr[prev+1] = curr;
    }
    return arr;
}

const arr = [9,1,2,3,4,5, -1,-10,10,-100];

console.log("insertionSort(n);", insertionSort(arr))