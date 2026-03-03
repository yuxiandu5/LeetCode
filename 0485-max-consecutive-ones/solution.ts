function findMaxConsecutiveOnes(nums: number[]): number {
    let result = 0
    let count = 0

    for(const num of nums) {
        if(num === 1) {
            count++
        } else {
            result = Math.max(count, result)
            count = 0
        }
    }

    return Math.max(result, count)
};
