function generate(numRows: number): number[][] {
    const results = [[1]]

    for(let i = 1; i < numRows; i++) {
        const prev = results[i - 1]
        const newArr = [1]

        for(let j = 1; j < prev.length; j++) {
            newArr.push(prev[j - 1] + prev[j])
        }

        newArr.push(1)
        results.push(newArr)
    }

    return results
};
