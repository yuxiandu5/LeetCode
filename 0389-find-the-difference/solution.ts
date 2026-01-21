// return string

// 1. loop through s record each letter with count
// 2. loop through t if count === 0 return value
// 3. return nothing

function findTheDifference(s: string, t: string): string {
    const record: Record<string, number> = {}

    for(const letter of s) {
        record[letter] = (record[letter] ?? 0) + 1
    }

    for(const letter of t) {
        if(!record[letter]) {
            return letter
        }

        record[letter]--
    }

    return ""
};
