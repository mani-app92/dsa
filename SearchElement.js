function searchElement(arr, number) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === number){
            return i
        }
    }
    return -1
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(searchElement(arr, 1));
