// return boolean

// 1. s into an array
// 2. loop each pattern and s using same index
//     if p[i] !== s[i]
//     return false

function wordPattern(pattern: string, s: string): boolean {
    const string = s.split(' ')

    if(pattern.length !== string.length) {
        return false
    }

    const record: Record<string, string> = {}

    for(let i = 0;i < pattern.length;i++) {
        const char = pattern[i]
        const needToBeAdded = record[char] === undefined && (
            !Object.values(record).includes(string[i])
        )

        if(needToBeAdded) {
            record[char] = string[i]
        }

        console.log(record, char)

        if(record[char] !== string[i]) {
            return false
        }
    }

    return true
};
