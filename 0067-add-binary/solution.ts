// return string

// 1. two pointers for loop from right to left
// 2. if num1 + num2  + carry === 2 then cur = 0 carry = 1
//     else cur = 1 carry = 0
// 3. at the end if cur === 1 result = "1" + result

function addBinary(a: string, b: string): string {
    let result = ""
    let carry = 0
        
    for(let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
        const num1 = Number(a[i] ?? "0")
        const num2 = Number(b[j] ?? "0")
        const sum = num1 + num2 + carry
        const cur = String(sum % 2)

        result = cur + result
        carry = Math.floor(sum / 2)
    }

    return carry ? "1" + result : result
};
