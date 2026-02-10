function countSegments(s: string): number {
    let count = 0

    for(let i = 0;i < s.length;i++) {
        if((s[i] !== ' ') && (s[i - 1] === " " || i === 0)) {
            count++
        }
    }

    return count
};
