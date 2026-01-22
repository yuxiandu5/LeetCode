// return number

// 1. binary search
// 2. i = 0, j = x 
// 3. while (i <= j)
// 4. if(i + x) / 2 > x ...
// 5. return i

function mySqrt(x: number): number {
    let left = 1
    let right = x

    while(left <= right) {
        const middle = Math.floor((left + right) / 2)
        const square = middle * middle

        if(square > x) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }

    return right
};
