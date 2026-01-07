// return number

// 1. scan from left to right
// 2. if the next value is bigger than cur value meaning combination then minus cur

function romanToInt(s: string): number {
    const map: Record<string, number> = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let total = 0

    for(let i = 0; i < s.length; i++) {
        const cur = map[s[i]]
        const next = map[s[i + 1]]

        if(next && next > cur) {
            total -= cur
        } else {
            total += cur
        }
    }

    return total
};
