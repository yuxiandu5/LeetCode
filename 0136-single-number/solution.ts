// return number

// 1. loop through arrary
// 2. declare a map 
// 3. add each number into the map with value: count
// 4. return the value with count 1

function singleNumber(nums: number[]): number {
    const record = new Map<number, number>()

    for(const num of nums) {
        record.set(num, (record.get(num) ?? 0) + 1)
    }

    for(const [number, count] of record) {
        if(count === 1) {
            return number
        }
    }
};
