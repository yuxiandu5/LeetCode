// scan from left to right
// length < 3 return []
// start from index 1 ends index - 1
// each iteration compare left & right

function findPeaks(mountain: number[]): number[] {
    if(mountain.length < 3) return

    const results = []

    for(let i = 1;i < mountain.length - 1;i++) {
        const prev = mountain[i - 1]
        const next = mountain[i + 1]
        const cur = mountain[i]

        if(prev < cur && cur > next) {
            results.push(i)
        }
    }

    return results
};
