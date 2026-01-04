// Output
// 1. length which is a number

// Approach
// 1. first iteration record all letters and counts
// 2. each count in record if even num add into length
// 3. if odd - 1 and add length declare hasOdd = true plus 1 before returning result

function longestPalindrome(s: string): number {
    const record: Record<string, number> = {}

    for(const letter of s) {
        record[letter] = (record[letter] ?? 0) + 1
    }

    let length = 0
    let hasOdd = false

    for(const count of Object.values(record)) {
        if(count % 2 === 0) {
            length += count
        } else {
            length += (count - 1)
            hasOdd = true
        }
    }

    return hasOdd ? length + 1 : length
 }; 
