/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

// return number

// 1. decalre two pointers left and right
// 2. while left < right
// 3. find mid and call isBadversion 
//    if true right = mid
//    else left = mid
// 4. return right

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let left = 0
        let right = n

        while(left < right) {
            const mid = Math.floor((left + right) / 2)
            if(isBadVersion(mid)) {
                right = mid
            } else {
                left = mid + 1
            }
        }

        return left
    };
};
