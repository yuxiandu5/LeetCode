type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
    const promise1 = new Promise((_, reject) => {
        setTimeout(() => reject("Time Limit Exceeded"), t)
    })

    return async function(...args) {
        return Promise.race([promise1, fn(...args)])
    }
}
