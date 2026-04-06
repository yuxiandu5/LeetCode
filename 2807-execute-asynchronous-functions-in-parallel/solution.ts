type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]) {
    return new Promise((resolve, reject) => {
        const results: T[] = []
        let count = 0

        for(let i = 0;i < functions.length;i++) {
            functions[i]()
            .then(value => {
                results[i] = value
                count++

                if(count === functions.length) {
                    resolve(results)
                }
            })
            .catch(error => reject(error))
        }
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
