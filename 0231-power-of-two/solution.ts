function isPowerOfTwo(n: number): boolean {
    let cur = 1

    while(cur < n) {
        cur *= 2
    }

    return cur === n
};
