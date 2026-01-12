// return boolean

// 1. two pointers j for s and i for t
// 2. loop through t
// 3. if match increment j
// 4. if j > s.length return true
// 5. at the end return false

function isSubsequence(s: string, t: string): boolean {
    if(s.length === 0 && t.length === 0) {
        return true
    }

    let j = 0

    for(let i = 0;i < t.length;i++) {
        if(t[i] === s[j]) {
            j++
        }
    }

    return j === s.length
};
