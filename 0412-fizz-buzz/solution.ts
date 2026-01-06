// 1. new array with n numbers
// 2. loop through if num is divisible by both 3 and 5 make the index = FizzBuzz, etc

function fizzBuzz(n: number): string[] {
    const answer: string[] = []

    for(let i = 1; i <= n; i++) {
        let cur = ""

        if(i % 3 === 0) {
            cur = "Fizz"
        }

        if(i % 5 === 0) {
            cur += "Buzz"
        }

        if(cur === "") {
            cur = i.toString()
        }

        answer.push(cur)
    }

    return answer
};
