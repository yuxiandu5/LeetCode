// 1. check if length are equal
// 2. loop through s add each letter with count inao a hashmap
// 3. loop through t if any of the value < 0 return false
// 4. return true

function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) {
        return false
    }

    const record: Record<string, number> = {}

    for(let i = 0;i < s.length;i++) {
        const charS = s[i]
        const charT = t[i]

        record[charS] = (record[charS] ?? 0) + 1
        record[charT] = (record[charT] ?? 0) - 1
    }

    return Object.values(record).every(char => char === 0)
};
