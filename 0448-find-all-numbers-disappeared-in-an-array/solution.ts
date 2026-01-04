// Output
// 1. array of nums

// Approach
// 1. we a Set of nums which aligns in the range
// 2. iterate through nums if record has this num remove it
// 3. retrun the record

function findDisappearedNumbers(nums: number[]): number[] {
    const set = new Set(nums)
    let result = []

    for(let i = 1; i <= nums.length; i++) {
        if(!set.has(i)){
            result.push(i)
        }
    }

    return result
};
