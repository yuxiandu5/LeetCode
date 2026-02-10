// return boolean

// 1. find the common divisor
// 2. for each divisor 
//     we slice from (0, divisor) and times it by s.length / divisor 
//     if match s true
// 3. return false

function repeatedSubstringPattern(s: string): boolean {
    for(let i = 1;i <= s.length / 2;i++) {
        if(s.length % i !== 0) {
            continue
        }

        const prefix = s.slice(0, i)
        const formed = prefix.repeat(s.length / i)

        if(formed === s) {
            return true
        }
    }

    return false
};
