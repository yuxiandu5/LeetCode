// 1. mutate nums
// 2. return number

// 1. const write = 0
// 2. for loop 
// 3. if prev !== cur nums[write] = cur write++ 
// 4. return write

// [0,0,1,1,1,2,2,3,3,4]

function removeDuplicates(nums: number[]): number {
    if(nums.length === 1) {
        return 1
    }

    let write = 1

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i - 1]) {
            nums[write] = nums[i]
            write++
        }
    }

    return write
};
