// return number

// 1. binary search two pointers
// 2. while left < right
// 2. calculate mid position
// 3. if mid === target return mid
// 4. if mid > target then right = mid index - 1
// 5. else left = mid index + 1

function searchInsert(nums: number[], target: number): number {
    let left = 0
    let right = nums.length - 1

    while(left <= right) {
        const mid = Math.floor((left + right) / 2)

        if(nums[mid] === target) return mid
        if(nums[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return left
};
