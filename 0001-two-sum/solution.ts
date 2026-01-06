// return array of indicies

// 1. scan left to right for loop
// 3. for every num, calculate the diff and try to look for the diff in the record
// 2. recrod each num with its index with a Record
// 4. if match return cur index and record index

function twoSum(nums: number[], target: number): number[] {
    const record: Record<number, number> = {}

    for(let i = 0; i < nums.length; i++) {
        const cur = nums[i]
        const diff = target - cur

        if(record[diff] !== undefined) {
            return [i, record[diff]]
        }

        record[cur] = i  
    }
};
