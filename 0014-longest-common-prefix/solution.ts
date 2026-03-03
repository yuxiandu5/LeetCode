// 1. sort the strs
// 2. declare first last and result 
// 3. loop through first 
//     compare each letter with first and last 
//     if no same return results

function longestCommonPrefix(strs: string[]): string {
    const strings = strs.sort()

    let first = strings[0]
    let last = strings.at(-1)
    let result = ''

    for(let i = 0;i < first.length;i++) {
        if(first[i] !== last[i]) {
            return result
        }

        result += first[i]
    }

    return result
};
