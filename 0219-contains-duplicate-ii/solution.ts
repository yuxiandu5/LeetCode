// Output
// 1. return boolean

// Approach
// 1. hashmap record num and its index if not exists
// 2. check if cur i === record[num] return true if so

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const record: Record<string, number> = {}

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i]

        if(i - record[num] <= k) {
            return true
        }

        record[num] = i
    }

    return false
};
