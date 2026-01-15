// return array

// 1. create an result array with initially [[1]]
// 2. for loop start with i = 1 when i < numRows
// 3. fill a the cur row with i 1
// 4. another for loop j = 1 j < i
// 5. row[j] = prev[j - 1] + prev[j]
// 5. push row
// 6. reurn result

function generate(numRows: number): number[][] {
    const result = [[1]]

    for(let i = 1; i < numRows; i++) {
        const row = Array(i + 1).fill(1)
        const prev = result[i - 1]
        
        for(let j = 1; j < i; j++) {
            row[j] = prev[j - 1] + prev[j]
        }

        result.push(row)
    }

    return result
};
