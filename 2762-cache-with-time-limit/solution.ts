class TimeLimitedCache {
    cache: Map<number, {value: number, timeoutId: ReturnType<typeof setTimeout>}>

    constructor() {
        this.cache = new Map()
    }
    
    set(key: number, value: number, duration: number): boolean {
        const isExist = this.cache.has(key)

        if(isExist) {
            clearTimeout(this.cache.get(key).timeoutId)
        }

        const timeoutId = setTimeout(() => this.cache.delete(key), duration)
        this.cache.set(key, {value, timeoutId})

        return isExist
    }
    
    get(key: number): number {
         const item = this.cache.get(key)

         return item ? item.value : -1
    }
    
    count(): number {
        return this.cache.size
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
