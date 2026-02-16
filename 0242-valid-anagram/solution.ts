// 1. check for same length
// 2. for loop record all letters in s
// 3. for loop minus all count from record if value = 0 return false

function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) {
        return false
    }

    const record: Record<string, number> = {}

    for(const char of s) {
        record[char] = (record[char] ?? 0) + 1
    }

    for(const char of t) {
        if(!record[char]) {
            return false
        }

        record[char] -= 1
    }

    return true
};
