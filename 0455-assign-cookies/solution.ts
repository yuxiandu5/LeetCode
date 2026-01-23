// return number

// 1. sort both array
// 2. two pointers i = 0 j = 0 count = 0
// 3. for loop j < s.length - 1
// 4. if s[j] > g[i] count++ ...
// 5. return count

function findContentChildren(g: number[], s: number[]): number {
     g.sort((a, b) => a - b)
     s.sort((a, b) => a - b)

    let i = 0
    let j = 0
    let count = 0
    
    while(j < s.length && i < g.length) {
        if(s[j] >= g[i]) {
            count++
            j++
            i++
        } else {
            j++
        }
    }

    return count
};
