type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    let result = []

    for(let i = 0;i < arr.length;i++) {
        const value = arr[i]
        const isValid = fn(value, i)

        if(isValid) {
            result.push(value)
        }
    }

    return result
};
