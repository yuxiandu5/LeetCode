/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

// return number

// 1. declare left and right 
// 2. loop while left <= right
//     cal mid
//     result = guess(mid) 
//     result === 0 return mid
//     result === 1 ....

function guessNumber(n: number): number {
    let left = 1
    let right = n

    while(left <= right) {
        const mid = Math.floor((left + right) / 2)
        const result = guess(mid)

        if(result === 0) {
            return mid
        }

        if(result === 1) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return -1
};
