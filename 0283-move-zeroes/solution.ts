// 1. declared index for mutating position
// 2. for loop
//    if !== 0
//    nums[index] = nums[i]
//    index++
// 3. for loop 
//     starting from index fill with 0

function moveZeroes(nums: number[]): void {
    let index = 0

    for(let i = 0;i < nums.length;i++) {
        const num = nums[i]

        if(num !== 0) {
            nums[index] = num
            index++
        }
    }

    for(let i = index; i < nums.length;i++) {
        nums[i] = 0
    }
};
