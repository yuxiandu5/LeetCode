// return number

// 1. left to right O(n)
// 2. we start on 0 with left total = 0 and right total = nums[1] to n with a for loop
// 3. another for loop comparing left and right values
// 4. add left by cur valur and minus right by the next value
// 5. if found mathc return index at the end return -1

function pivotIndex(nums: number[]): number {
    const total = nums.reduce((sum, n) => sum + n, 0)
    let left = 0

    for (let i = 0; i < nums.length; i++) {
        const right = total - left - nums[i]
        if (left === right) {
            return i
        }
        left += nums[i]
    }

    return -1
}
