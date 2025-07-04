function removeElements(nums, val){
    let k = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== val){
            nums[k] = nums[i]
            k++;
        }
    }
    return k;
}
const nums = [-1,0,0,1,1,1,2,2,3,3,4]
const val = 3;
const k = removeElements(nums, val);
console.log("k", k)