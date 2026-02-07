// return number

// 1. for loop from 2 til n
// 2. at the same time remembering the prev 2

function fib(n: number): number {
    if(n === 0) return 0
    if(n === 1) return 1

    let prevprev = 0
    let prev = 1
    let sum = 1

    for(let i = 3;i <= n;i++) { 
        prevprev = prev
        prev = sum
        sum = prev + prevprev
    }

    return sum
};
