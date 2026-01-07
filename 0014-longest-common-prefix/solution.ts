// return string

// 1. declare result = "", declare and cur index for letter
// 2. find the shorttest string in the array with reduce
// 3. for loop with i for each string in the array
// 4. check using curIndex if cur item is the same as the shortest[curIndex]
// 5. if not return result
// 6. after loop return result

function longestCommonPrefix(strs: string[]): string {
    let result = ""

    const shortest = strs.reduce((short, cur) => cur.length < short.length ? cur : short)

    for(let i = 0; i < shortest.length;i++) {
        for(let j = 0; j < strs.length;j++) {
            const current = strs[j]

            if(current[i] !== shortest[i]){
                return result
            }
        }

        result = shortest.substring(0, i + 1)
    }

    return result
};
