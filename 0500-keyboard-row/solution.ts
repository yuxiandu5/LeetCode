// return array 

// 1. for loop each word
// 2. find corresponding row for word[0]
// 3. check if the rest of letters are in the same row
//     return word 
//     else continue

function findWords(words: string[]): string[] {
    const rowMap: Record<string, number> = {
    q: 1, w: 1, e: 1, r: 1, t: 1, y: 1, u: 1, i: 1, o: 1, p: 1,
    a: 2, s: 2, d: 2, f: 2, g: 2, h: 2, j: 2, k: 2, l: 2,
    z: 3, x: 3, c: 3, v: 3, b: 3, n: 3, m: 3
    }

    const output = words.filter(word => {
        const initial = word[0].toLowerCase()
        const row = rowMap[initial]

        for(let i = 1;i < word.length;i++) {
            if(rowMap[word[i].toLowerCase()] !== row) {
                return false
            }
        }

        return true
    })

    return output
};
