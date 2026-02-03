// return number

// 1. declare two pointers left and right
// 2. while left <= right
// 3. find mid compare to target 
// 4. if mid === target return mid
// 5. if mid > target
//     right = mid - 1 else
//     left = mid + 1
// 6. return -1

function search(nums: number[], target: number): number {
    let left = 0
    let right = nums.length - 1

    while(left <= right) {
        const mid = Math.floor((left + right) / 2)
        const num = nums[mid]
        if(num === target) {
            return mid
        }

        if(num > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return -1
};
