// return number

// 3. if n below 2 then return n right away
// 1. ways(n) = ways(n - 1) + ways(n - 2)
// 2. followng this rule we can have a for loop
// 4. for i = 3 i <= n, prev1 = 1 prev = 2...

function climbStairs(n: number): number {
    if(n <= 2) {
        return n
    }

    let prev1 = 1
    let prev2 = 2
    let total

    for(let i = 3; i <= n;i++) {
        total = prev1 + prev2

        prev1 = prev2
        prev2 = total
    }

    return total
};
