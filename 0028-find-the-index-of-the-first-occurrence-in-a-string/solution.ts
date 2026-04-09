// declare right which is the length of needle
// scan from left to right for right <= haystack.length
// use subString(i, right) equal return i 
// end return -1

function strStr(haystack: string, needle: string): number {
    let right = needle.length

    for(let i = 0; right <= haystack.length; i++) {
        if(haystack.substring(i, right) === needle) {
            return i
        }

        right++
    }

    return -1
};
