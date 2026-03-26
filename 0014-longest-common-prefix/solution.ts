// sort strs
// declare result
// loop with i < strs.length
// ["flow", "flower","flight"]

function longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0]

    for(let i = 0;i < strs.length;i++) {
        while(!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1)
        }
    }

    return prefix
};
