// Responsibilities 
// 1. mutate nums
// 2. return k

// declare k = 0 as the new index tracker to rewrite nums
// scan from left to right
// if cur !== val reaplce the k index with cur value

function removeElement(nums: number[], val: number): number {
    let k = 0
    
    for(const num of nums) {
        if(num !== val) {
            nums[k] = num
            k++
        }
    }

    return k
};
