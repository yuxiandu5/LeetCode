type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    const cache = new Map()
        
    return function(...args) {
        const serialized = args.join(',')

        if(!cache.has(serialized)) {
            cache.set(serialized, fn(...args))
        }

        return cache.get(serialized)
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
