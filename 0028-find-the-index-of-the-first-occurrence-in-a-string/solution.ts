// return number

// 1. scan from left to right
// 2. for loop from left to right
// 3. if slice hatstack[i, i + needle.length] === needle return i 
// 4. at the end return -1


function strStr(haystack: string, needle: string): number {
    const j = needle.length
    const k = haystack.length

    for(let i = 0; i <= k - j;i++) {
        if(haystack.slice(i, i + j) === needle) {
            return i
        }
    }

    return -1
};
