// for loop
// two pointers
//      if not the same return fasle


function isPalindrome(x: number): boolean {
    const string = x.toString()
    let left = 0
    let right = string.length - 1

    while(left < right) {
        if(string[left] !== string[right]) {
            return false
        }

        left++
        right--
    }    

    return true
};

