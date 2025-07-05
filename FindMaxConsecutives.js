function findMaxConsecutives(nums){
    let maxConsecutive = 0;
    let consecutiveCount = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 1){
            consecutiveCount++;
            maxConsecutive = Math.max(maxConsecutive, consecutiveCount)
        } else {
            consecutiveCount = 0;
        }
    }
    return maxConsecutive;
}
const nums = [0,1,1,1,0,1];

console.log("findMaxConsecutives(nums)", findMaxConsecutives(nums))