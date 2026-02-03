// return boolean

// 1. declare a Record for the brackets
// 2. scan from left to right
// 3. if its one of the key push the corresponding value into array
// 4. if its one of the value check if it matches the last element in the array 
//     if yes remove the value 
//     if not return false
// 5. return true

function isValid(s: string): boolean {
    if(s.length === 1) {
        return false
    }
        
    const map: Record<string, string> = {
        '(': ')',
        '[': ']',
        '{': '}',
    }

    const record: string[] = []

    for(const element of s) {
        const cur = map[element]

        if(cur) {
            record.push(cur)
        } else {
            const length = record.length
            if(length === 0 || record[length - 1] !== element) {
                return false
            }
            
            record.pop()
        }
    }

    return record.length === 0
};
