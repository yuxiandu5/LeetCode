// return number

// 1. sort the array
// 2. for loop if cur !== i + 1 meaning missing, return i + 1

// function missingNumber(nums: number[]): number {
//     nums.sort((a, b) => a - b)

//     for(let i = 0; i < nums.length;i++) {
//         if(nums[i] !== i) {
//             return i
//         }
//     }

//     return nums.length
// };

function missingNumber(nums: number[]): number {
    const n = nums.length
    const expected = n * (n + 1) / 2

    let sum = 0

    for(const num of nums) {
        sum += num
    }

    return expected - sum
}
