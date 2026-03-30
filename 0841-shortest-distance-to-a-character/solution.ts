// find all index for c
// scan from left to right
// try cur index with all c indexes, find min

function shortestToChar(s: string, c: string): number[] {
    const indexes: number[] = []

    for(let i = 0;i < s.length;i++) {
        if(s[i] === c) {
            indexes.push(i)
        }
    }

    const results = []

    for(let i = 0;i < s.length;i++) {
        let minDistance = Number.MAX_SAFE_INTEGER

        indexes.forEach(index => {
            const diff = Math.abs(index - i)
            minDistance = Math.min(minDistance, diff)
        })

        results.push(minDistance)
    }

    return results
};

