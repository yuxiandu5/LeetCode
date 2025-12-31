// Responsibility
// 1. mutate nums
// 2. return nums


// Appraoch
// 1. we basically wan tofind the largest square in nums and place it at the end of a new arr
// 2. the largest will always be at the end so we will have two pointers
// 3. i = 0 j = nums.length - 1
// 4. while i < j we check whcih squre is larger


function sortedSquares(nums: number[]): number[] {
    let left = 0
    let right = nums.length - 1
    let result = new Array(nums.length)
    let write = nums.length - 1

    while(left <= right) {
        let leftSquare = nums[left] * nums[left]
        let rightSquare = nums[right] * nums[right]

        if(leftSquare > rightSquare) {
            result[write--] = leftSquare
            left++
        } else {
            result[write--] = rightSquare
            right--
        }
    }

    return result
};
