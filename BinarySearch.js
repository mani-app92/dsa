function binarySearch(arr, target){
    let left = 0;
    let right = arr.length - 1;
    while(right >= left) {
        const middle = Math.floor((right + left) / 2);
        if(arr[middle] === target){
            return middle;
        } else if(target > arr[middle]){
            left = middle + 1
        } else {
            right = middle - 1;
        }
    }
    return -1;
}

const n = 0;
const arr = [-1,0,3,5,9,12];

console.log("binarySearch(n);", binarySearch(arr, n))