// Output
// 1. return boolean

// Approach
// 1. lower case all
// 2. replace all random symbol with "" by using regex
// 3. two pointers
// 4. while left is < right if diff return false 
// 5. end return true

function isPalindrome(s: string): boolean {
    const string = s.toLowerCase().replace(/[^a-z0-9]/g, "")

    let i = 0
    let j = string.length - 1

    while(i < j) {
        if(string[i++] !== string[j--]) {
            return false
        }
    }

    return true
};
