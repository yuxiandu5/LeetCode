// return number

// 1. binary search two pointers
// 2. left = 0 right = num
// 3. while left <= right
// 4. take middle then square see if square > num 
// 5.  return false

function isPerfectSquare(num: number): boolean {
    let left = 0
    let right = num

    while(left * left <= num) {
        const middle = Math.floor((left + right) / 2)
        const square = middle * middle

        if(square === num) {
            return true
        }

        if(square > num) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }

    return false
};

