// 1. for loop with i = 1 let remain = n
// 2. i represent the coins needed to the cur row
// 3. each iteration remain minus i 
//     if remain < 0 
//         return i - 1

function arrangeCoins(n: number): number {
    let remain = n
    let row = 0

    while(remain > 0) {
        row++
        remain -= row
    }

    return remain < 0 ? row - 1 : row
};
