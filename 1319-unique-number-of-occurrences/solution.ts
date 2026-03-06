
// scan from left to right
// record each num to a record
// for each value put it into a set
// if already exist return false 
// return true

function uniqueOccurrences(arr: number[]): boolean {
    const record: Record<number, number> = {}

    for(const num of arr) {
        record[num] = (record[num] ?? 0) + 1
    }

    const set = new Set()
    let result = true

    Object.values(record).forEach(num => {
        if(set.has(num)) {
            result = false
        }
        set.add(num)
    })

    return result
};
