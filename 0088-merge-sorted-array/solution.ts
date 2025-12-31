// Responsibility
// 1. mutate nums1

// Approach
// 1. three pointers tracking: 
//     i = m - 1
//     j = n -1
//     k = m + n -1
// 2. conditons: 
//      only when j more than 0 if j is all sorted then i is sorted by itself
//      if nums2[j] > nums1[i], then nums1[k] = nums2[j]


function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1
    let j = n - 1
    let k = m + n - 1

    while(j >= 0) {
        if(nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--]
        } else {            
            nums1[k--] = nums2[j--]
        }
    }
};
