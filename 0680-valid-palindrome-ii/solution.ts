// 1. loop through normally with two pointers
// 2. if mismatch try skip left or right if both fail return false
// 3. need a seperate function for it

function validPalindrome(s: string): boolean {
    let i = 0
    let j = s.length - 1

    while(i < j) {
        if(s[i] !== s[j]) {
            return(
                isPalindrome(s, i + 1, j) ||
                isPalindrome(s, i, j - 1)
            )
        }
        i++
        j--
    }
    return true
};

function isPalindrome(s: string, left: number, right: number):boolean {
    while(left < right) {
        if(s[left] !== s[right]) {
            return false
        }
        left++
        right--
    }
    return true
}
