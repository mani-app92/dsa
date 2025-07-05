function moveZeroes(nums){
    let a = 0;
    for(let i = 1; i < nums.length; i++){
        if(nums[a] !== 0){
            a++;
        } else if(nums[i] !== 0){
            nums[a++] = nums[i];
            nums[i] = 0;
        }
    }
    console.log("nunmbs", nums)
}
const nums = [0,0,0,0,0,0,1,2,3,4,5,0,0,0,0,9,6,8,9,0,78,5,3];

moveZeroes(nums)