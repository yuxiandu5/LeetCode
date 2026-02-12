// return boolean

// 1. loop through magazine and 
//     record into a Record with its value and count
// 2. loop through ransomNote
//     minus the corresponding count
//     if negative or char not found
//         return false
// 3. return true

function canConstruct(ransomNote: string, magazine: string): boolean {
    const record: Record<string, number> = {}

    for(const char of magazine) {
        record[char] = (record[char] ?? 0) + 1
    }

    for(const char of ransomNote) {
        if(!record[char]) {
            return false
        }

        record[char] -= 1
    }

    return true
};
