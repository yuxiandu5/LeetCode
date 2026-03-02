function titleToNumber(columnTitle: string): number {
    let result = 0

    for(let i = 0;i < columnTitle.length;i++) {
        const cur = columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1

        result = result * 26 + cur
    }

    return result
};
