// Responsibility
// 1. murate nums

// Approach:
// 1. scan from left to right
// 2. declare writeIndex = 0 to keep track of where the next non zero value shld be
// 3. if(nums[i] !== 0) {
//     nums[nextNonZeroIndex++] = nums[i]
//     }

// 4. at the end another for loop for(let i = nextNonZeroIndex + 1; i < nums.length; i++) to overwrite to 0

function moveZeroes(nums: number[]): void {
    let writeIndex = 0
        
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[writeIndex++] = nums[i]
        }
    }

    for(let i = writeIndex; i < nums.length; i++) {
        nums[i] = 0
    }
};
