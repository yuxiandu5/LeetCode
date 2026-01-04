// Output
// return array

// Appraoch
// 1. hashmap first nums key: num value: count. record = {}
// 2. iterate through nums2
// 3. if exist in record add into result record[num] -= 1

function intersect(nums1: number[], nums2: number[]): number[] {
    const record: Record<number, number> = {}

    for(const num of nums1) {
        record[num] = (record[num] ?? 0) + 1
    }

    let result = []

    for(const num of nums2) {
        if(record[num] > 0) {
            result = [...result, num]
            record[num]--
        }
    }

    return result
};
