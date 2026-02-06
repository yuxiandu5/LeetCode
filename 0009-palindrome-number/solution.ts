// return boolean

// 1. x to string
// 2. declare left and right
// 3. while(left < right)
// 4. if x[left] !== x[right]
//     return false
// 5. return true

function isPalindrome(x: number): boolean {
    const num = x.toString()

    let left = 0
    let right = num.length - 1

    while(left < right) {
        if(num[left] !== num[right]) {
            return false
        }

        left++
        right--
    }

    return true
};
