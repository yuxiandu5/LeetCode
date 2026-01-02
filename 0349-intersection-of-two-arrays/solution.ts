// Output
// 1. Array

// Approach
// 1. loop through first and record each unique number use set
// 2. loop through second, set.has() declare a new array

function intersection(nums1: number[], nums2: number[]): number[] {
    const record = new Set<number>(nums1)
    const result = new Set<number>()

    for(const num of nums2) {
        if(record.has(num)) {
            result.add(num)
        }
    }

    return[...result]
};
