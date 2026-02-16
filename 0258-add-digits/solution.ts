function addDigits(num: number): number {
    while(num >= 10) {
        let sum = 0

        for(const number of String(num)) {
            sum += Number(number)
        }

        num = sum
    }

    return num
};
