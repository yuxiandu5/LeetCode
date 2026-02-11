function fizzBuzz(n: number): string[] {
    const output: string[] = []
            
    for(let num = 1;num <= n;num++) {
        if(num % 3 === 0 && num % 5 === 0) {
            output.push('FizzBuzz')
            continue
        }

        if(num % 3 === 0) {
            output.push('Fizz')
            continue
        }

        if(num % 5 === 0) {
            output.push('Buzz')
            continue
        }

        output.push(num.toString())
    } 

    return output
};
