// 1. declare start output
// 2. loop through nums
// 3. if next !== cur + 1
//     push start -> end to output

//     end = next


function summaryRanges(nums: number[]): string[] {
    if(nums.length === 0) {
        return []
    }

    const output = []
    let start = nums[0] 

    for(let i = 0;i < nums.length;i++) {
        const cur = nums[i]
        const next = nums[i + 1]

        if(next !== nums[i] + 1) {
            const result = start === cur ? String(start) : `${start}->${cur}`

            output.push(result)
            start = next
        }
    }

    return output
};
