// Output
// 1. return number

// Approach
// 1. scan from left to right
// 2. for each iteration store the min price so far cal sell today profit based on min so far
// and the max profit so far 

function maxProfit(prices: number[]): number {
    let minPrice = prices[0]
    let maxProfit = 0;

    for (const price of prices) {
        let profit = price - minPrice
        maxProfit = Math.max(maxProfit, profit)
        minPrice = Math.min(minPrice, price)
    }

    return maxProfit;
};
