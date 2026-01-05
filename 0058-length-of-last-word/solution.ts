// Output
// 1. return length

// Approach
// 1. start from the end
// 2. add count until reach white space

function lengthOfLastWord(s: string): number {
    let length = 0

    for(let i = s.length - 1; i >= 0; i--) {
        if(s[i] !== " ") {
            length++
        } else if(length > 0) {
            return length
        }
    }

    return length
};
