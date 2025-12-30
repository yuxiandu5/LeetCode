// Responsibilities
// 1. rewrite nums
// 2. return k


// biggest hint is non decreasing order
// scan from left to right, when cur !== prev meaning diff number appear
// use k as the index to rewrite nums, so declare k = 1 at beginning, as diff numbers appear increment k



function removeDuplicates(nums: number[]): number {
    let k = 1

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]
            k++
        }
    }

    return k
}
