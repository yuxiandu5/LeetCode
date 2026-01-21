// return boolean

// 1. a loop while the sum is not = 1
// 2. we need a set to remember all the number has appeared
// 3. if the sum in set return false
// 4. return true when loop exit

function isHappy(n: number): boolean {
    const record = new Set()
    let sum = calculateSum(n)

    while(sum !== 1) {
        if(record.has(sum)) {
            return false
        }

        record.add(sum)
        sum = calculateSum(sum)
    }

    return true
};

function calculateSum(number: number): number {
    const string = number.toString()
    let sum = 0

    for(const digit of string) {
        const int = Number(digit)
        sum += int * int
    }

    return sum
}
