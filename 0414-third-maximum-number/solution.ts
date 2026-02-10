// 1. into set remove duplicate
// 2. back to array and sort
// 3. return nums[2] else nums[nums.length() - 1]

function thirdMax(nums: number[]): number {
    const unique = new Set(nums)
    const sorted = [...unique].sort((a, b) => b - a)

    return sorted[2] ?? sorted[0]
};
