function maxProfit(prices: number[]): number {
    let minBuy = prices[0]
    let maxProfit = 0

    for(const cur of prices) {
        minBuy = Math.min(cur, minBuy)
        maxProfit = Math.max(maxProfit, cur - minBuy)
    }

    return maxProfit
};
