// Approach 
// 1. loop through each 
// 2. record it into hashmap
// 3. loop to find the first letter with count = 1

function firstUniqChar(s: string): number {
    const record: Record<string, number> = {}
 
    for(const l of s) {
        if(record[l] === undefined) {
            record[l] = 0
        }

        record[l] += 1
    }

    for(let i = 0; i < s.length; i++) {
        if(record[s[i]] === 1) {
            return i
        }
    }

    return -1
};
