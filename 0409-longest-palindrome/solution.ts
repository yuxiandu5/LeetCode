// 1. for each element add into a map element: count
// 2. we add all counts if odd - 1 else count
// 3. if cur < s.length plus 1

function longestPalindrome(s: string): number {
    const record: Record<string, number> = {}

    for(const char of s) {
        record[char] = (record[char] ?? 0) + 1
    }

    let length: number = 0

    Object.values(record).forEach(count => {
        length += count % 2 === 0 ? count : count - 1
    })

    const hasOdd = Object.values(record).some(count => count % 2 !== 0)

    return hasOdd ? length + 1 : length
};
