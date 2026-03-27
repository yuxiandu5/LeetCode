// scan from left to right
// cal profit = (today's price - minBuy) each iteration compare to maxProfit
// record the min pirce as we iterate

function maxProfit(prices: number[]): number {
    let minBuy = prices[0]
    let maxProfit = 0

    for(let i = 1;i < prices.length;i++) {
        const price = prices[i]
        const profit = price - minBuy

        maxProfit = Math.max(maxProfit, profit)
        minBuy = Math.min(price, minBuy)
    }

    return maxProfit
};
