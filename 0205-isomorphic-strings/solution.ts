// 1. length diff return false
// 2. for loop with i
//     for each in s record its corresponding value into a hashMap
//     if mismatch return false
// 3. return true

function isIsomorphic(s: string, t: string): boolean {
    if(s.length !== t.length) {
        return false
    }

    const recordS: Record<string, string> = {}
    const recordT: Record<string, string> = {}

    for(let i = 0;i < s.length;i++) {
        const charS = s[i]
        const charT = t[i]

        if(!recordS[charS] && !recordT[charT]) {
            recordS[charS] = charT
            recordT[charT] = charS
        }

        if(recordS[charS] !== charT || recordT[charT] !== charS) {
            return false
        }
    }

    return true
};
