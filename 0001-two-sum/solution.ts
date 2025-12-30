function twoSum(nums: number[], target: number): number[] {
    const record: Record<number, number> = {}
        
    for(let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]

        if(record[diff] !== undefined){
            return [record[diff], i]
        }

        record[nums[i]] = i
    }
};
