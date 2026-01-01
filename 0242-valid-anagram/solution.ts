// Output
// 1. return boolean

// Approach
// 1. first check for length
// 2. for string1 we write it into a hashmap with key = letter value = count
// 3. for string2 we increment or decrement based on hashmap
// 4. if any count goes to negative return 
// 5. and since length is the same there wont be any 0, 0, 1, 0

function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) {
        return false
    }

    const record: Record<string, number> = {}

    for(const letter of s) {
        if(!record[letter]) {
            record[letter] = 0
        }

        record[letter] += 1
    }

    for(const letter of t) {
        if(!record[letter]) {
            return false
        }

        record[letter] -= 1
    }

    return true
};
