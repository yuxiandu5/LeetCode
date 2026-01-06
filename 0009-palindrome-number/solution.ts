// return boolean

// 1. turn num into a string
// 2. two pointers left and right
// 3. while left < right 
// 4. check if both are the same, if same incre and decre left and right each iteration
// 5. after loop return true

function isPalindrome(x: number): boolean {
    if(x < 0) {
        return false
    }

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

