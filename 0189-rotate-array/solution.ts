// Responsibility
// 1. mutate nums 

// Approach
// 1. if we break it into sections, [1, 2, 3, 4, 5, 6] k determines the seperation, section A would be the shifting nums, section B would be the rotating sections.

// the approach is simply reverse the whole array,
// and reverse the sections so it orders normally.

// reverse whole = [6, 5, 4 ,3 ,2 ,1]
// reverse section A = [6, 5, 1, 2, 3, 4]
// reverse section b = [5, 6, 1, 2, 3, 4]

function rotate(nums: number[], k: number): void {
    const last = nums.length - 1
    k = k % nums.length

    reverse(nums, 0, last)
    reverse(nums, k , last)
    reverse(nums, 0, k - 1)
};

// The revsers function
// 1. [1, 2, 3, 4, 5, 6]

// we can reverse the array by swapping end to end 
// [6, 2, 3, 4, 5, 1]
// [6, 5, 3, 4, 2, 1]
// [6, 5, 4, 3, 2, 1]

// so we first input an arr, and left and right indexes. 
// as reverse progressing, we increment or decrement left right indexes. 
// eventually it either equals each other or right left becomes larger than right, thats when we need to stop. therefore, conditon would be when left < right. we swap the left and right values

function reverse(nums, left, right) {
    while(left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left++
        right--
    }
}
