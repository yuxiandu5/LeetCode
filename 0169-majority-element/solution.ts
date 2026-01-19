// Output
// 1. return number

// Approach
// 1. Boyer–Moore Voting Algorithm.
// 2. declare a count and current.
// 3. scan left to right
// 4. if num === current + 1 else - 1
// 5. therefore if count === 0 meaning num is going to be the new current
// 6. at the end current will be the number with most appeared times

function majorityElement(nums: number[]): number {
    let count = 0
    let current

    for(const num of nums) {
        if(count === 0) {
            current = num
        }
        if(num === current) {
            count++
        } else {
            count--
        }
    }

    return current
};
