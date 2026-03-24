function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let result = []

    for(let i = 0;i < arr.length;i++) {
        const value = fn(arr[i], i)
        result.push(value)
    }

    return result
};

