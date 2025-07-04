function maxProfit(prices){
    let m = prices[0], profit = 0;
    for(let i = 1; i < prices.length; i++){
        if(m > prices[i]){
            m = prices[i]
        } else if((prices[i] - m) > profit){
            profit = prices[i] - m;
        }
    }
    return profit;
}
const prices = [1,3,20,1,8, 19]
console.log("Max Profilt", maxProfit(prices))