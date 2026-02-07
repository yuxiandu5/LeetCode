// return arrary

// 1. make a sorted version of score
// 2. create a Record for 1, 2 ,3
// 3. map the scores into a new array 

function findRelativeRanks(score: number[]): string[] {
    const medal: Record<number, string> = {
        1: "Gold Medal",
        2: "Silver Medal",
        3: "Bronze Medal",
    }

    const sorted = [...score].sort((a, b) => b - a)

    const table: Record<number, number> = {}

    sorted.forEach((score, i) => {
        table[score] = i + 1
    })

    return score.map(score => {
        const rank = table[score]
        return medal[rank] ?? rank.toString()
    })
};
