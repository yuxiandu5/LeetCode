// 1. mutate nums
// 2. return number

// 1. scan from left to right
// 2. if prev num is not equal to cur meaning diff num
// 3. write it to the next available index

function removeDuplicates(nums: number[]): number {
    let index = 1

    for(let i = 1; i < nums.length;i++) {
        if(nums[i] !== nums[i - 1]){
            nums[index] = nums[i]
            index++
        }
    }

    return index
};
