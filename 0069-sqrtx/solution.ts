// return number

// Binary Search

// 1. left = 0 right = x
// 2. take mid if mid squre > x then {
//     right = mid - 1
// } else {
//     left = mid + 1
// }

function mySqrt(x: number): number {
    let left = 0
    let right = x
    let answer

    while(left <= right) {
        const mid = Math.floor((left + right) / 2)

        if ((mid * mid) > x) {
            right = mid - 1
        } else {
            answer = mid
            left = mid + 1
        }
    }

    return answer
};
