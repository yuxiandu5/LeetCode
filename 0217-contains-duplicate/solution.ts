// Output
// 1. return boolean

// Approach
// 1. set
// 2. iterate from left to right
// 3. if in set return true

function containsDuplicate(nums: number[]): boolean {
    const record = new Set<number>()

    for(const num of nums) {
        if(record.has(num)) {
            return true
        }
        record.add(num)
    }

    return false
};
