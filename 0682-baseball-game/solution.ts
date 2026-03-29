function calPoints(operations: string[]): number {
    const results: number[] = []

    const commands: Record <string, () => void> = {
        '+': () => results.push(results.at(-1) + results.at(-2)),
        'D': () => results.push(results.at(-1) * 2),
        'C': () => results.pop(),
    }

    for(const cur of operations) {
        const operation = commands[cur]

        if(operation) {
            operation()
        } else {
            results.push(Number(cur))
        }
    }

    return results.reduce((total, cur) => total + cur, 0)
};
