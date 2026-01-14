// return boolean

// 1. create a stack to record whats the next closing bracket
// 2. for loop if opening push 
// 3. if its an closing match the stack if true pop else return false
// 4. return if stack is empty

function isValid(s: string): boolean {
    const record: Record<string, string> = {
        "(": ")",
        "{": "}",
        "[": "]",
    }

    let stack = []

    for(const bracket of s) {
        if(record[bracket]) {
            stack.push(record[bracket])
        } else {
            const last = stack.pop()

            if(bracket !== last) {
                return false
            }
        }
    }

    return !stack.length
};
