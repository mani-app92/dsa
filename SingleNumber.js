function singleNumber(nums){
    let diffNum = 0;
    for (let i = 0; i < nums.length; i++) {
        diffNum = diffNum ^ nums[i];
    }
    return diffNum; 
}
const nums = [10,2,3,2,3,8,9,8,9];

console.log("singleNumber", singleNumber(nums))