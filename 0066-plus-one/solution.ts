// Responsibility
// 1. mutate digits

// Approach
// 1. for loop start from right to left
// 2. if cur < 9 meaning i just need to increment it by 1 and return else cur++ i--
// 3. if after loop still hasnt returned meaning its all 9999... then mutate digits [1, ...digits]


function plusOne(digits: number[]): number[] {
    for(let i = digits.length - 1;i >= 0;i--) {
        if(digits[i] < 9) {
            digits[i] ++
            return digits
        }
        digits[i] = 0
    }

    return [1, ...digits]
};
