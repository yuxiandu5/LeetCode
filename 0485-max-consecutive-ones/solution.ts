// return number

// 1. declare max and cur
// 2. if num === 1 cur ++
//     if num === 0 max = max > cur ? max : cur
//     cur === 0

function findMaxConsecutiveOnes(nums: number[]): number {
    let max = 0
    let cur = 0

    for(const num of nums) {
        if(num === 1) {
            cur++
        } else {
            max = max > cur ? max : cur
            cur = 0
        }
    }

    return Math.max(max, cur)
};
