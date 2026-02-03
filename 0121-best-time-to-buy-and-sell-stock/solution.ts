// return number

// 1. scan from left to right
// 2. record the cheapest price to buy so far on the way, and declare profit
// 3. compare the cheapest to the cur day price if cheaper than profit then profit = cur profit
// 4. return profit > 0 ? profit : 0

function maxProfit(prices: number[]): number {
    if(prices.length === 1) {
        return 0
    }
        
    let cheapest = prices[0]
    let profit = 0

    for(let i = 1;i < prices.length;i++) {
        const todayPrice = prices[i]
        const todayProfit = todayPrice - cheapest

        if(todayProfit > profit) {
            profit = todayProfit
        }

        if(todayPrice < cheapest) {
            cheapest = todayPrice
        }
    }

    return profit > 0 ? profit : 0
};
