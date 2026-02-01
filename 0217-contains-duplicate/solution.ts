// 1. decalare a set
// 2. loop through nums
// 3. check if num in set if not add if yes return true
// 4. return false

function containsDuplicate(nums: number[]): boolean {
    const record = new Set()

    for(const num of nums) {
        if(record.has(num)) {
            return true
        }

        record.add(num)
    }

    return false
};
