// record num1 into a set
// record num2 into a set
// iterate through nums 1 to check if nums2 contains any
// same for nums2


function findDifference(nums1: number[], nums2: number[]): number[][] {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)

    const result: number[][] = [[], []]

    set1.forEach(num => {
        if(!set2.has(num)) {
            result[0].push(num)
        }
    })

    set2.forEach(num => {
        if(!set1.has(num)) {
            result[1].push(num)
        }
    })

    return result
};
