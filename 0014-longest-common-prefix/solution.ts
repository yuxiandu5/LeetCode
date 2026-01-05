// Approach
// 1. find the shortest string in strs and set it as the prefix
// 2. for loop with i for index 
// 3. loop through each string in strs
// 4. if the cur string[i] !== prefix[i] meaning mismatch return preffix with slice(0, i) 

function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";

    let prefix = strs.reduce((shortest, current) => 
        current.length < shortest.length 
        ? current 
        : shortest
    )

    for(let i = 0; i < prefix.length; i++) {
        const letter = prefix[i] 

        for(const str of strs) {
            if(str[i] !== letter) {
                return prefix.slice(0, i)
            }
        }
    }

    return prefix
}

