// 1. move nums into a set
// 2. loop with i 
//     if i + 1 not in set push to result
// 3. return result

function findDisappearedNumbers(nums: number[]): number[] {
    const record = new Set(nums)
    const result = []

    for(let i = 1;i < nums.length + 1;i++) {
        if(!record.has(i)) {
            result.push(i)
        }
    }

    return result
};
