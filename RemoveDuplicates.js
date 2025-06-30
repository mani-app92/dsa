function removeDuplicates(nums){
    let k = 0;
    for(let i = 0; i < nums.length; i++ ){
        if(nums[i] !== nums[k]){
            k++;
            nums[k] = nums[i]
        }
    }
    return (k+1);
}
const nums = [-1,0,0,1,1,1,2,2,3,3,4]
const k = removeDuplicates(nums);
console.log("k", k)