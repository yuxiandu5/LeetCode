interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}

Array.prototype.groupBy = function(fn) {
    const results: Record<string, any> = {}

    for(let i = 0; i < this.length; i++) {
        const current = this[i]
        const key = fn(current)

        results[key]
        ? results[key].push(current)
        : results[key] = [current]
    }

    return results
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
