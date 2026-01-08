// 1. mutate nums
// 2. return number

// 1. scan from left to right
// 2. declare index as the next available index to write
// 3. for loop if cur !== val write it to the index

function removeElement(nums: number[], val: number): number {
    let index = 0

    for(const num of nums) {
        if(num !== val) {
            nums[index] = num
            index++
        }
    }

    return index
};
