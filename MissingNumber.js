function missingNumber(nums){
    let newSortedNums = new Array(nums.length).fill(-1);
    let missingNum = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            newSortedNums[nums[i] - 1] = nums[i];
        }
    }

    for(let i = 0; i < newSortedNums.length; i++){
        if(newSortedNums[i] == -1){
            missingNum = i+1;
            break; 
        }
    }
    return missingNum;
}
const nums = [1,2,4,0,5];

console.log("MissingNumber", missingNumber(nums))