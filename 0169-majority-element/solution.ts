function majorityElement(nums: number[]): number {
    let answer
    let count = 0

    for (const num of nums) {
        if (count === 0) {
            answer = num
        }

        count += (answer === num) ? 1 : -1
    }

    return answer
};
