// mutate nums
// return number

// 1. const write = 0
// 3. for loop
// 4. if cur !== prev
// 5. nums[write] = num write++
// 6. return write

function removeDuplicates(nums: number[]): number {
    let write = 1

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i - 1]){
            nums[write] = nums[i]
            write++
        }
    }

    return write
};
