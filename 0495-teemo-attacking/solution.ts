// return number

// 1. loop through left to right
// 2. calculate next to cur difference if less then duration 
//     sum += diff
//     else plus duration

function findPoisonedDuration(timeSeries: number[], duration: number): number {
    let sum = 0

    for(let i = 0;i < timeSeries.length;i++) {
        const next = timeSeries[i + 1]
        const effective = next ? Math.min(duration, next - timeSeries[i]) : duration

        sum += effective
    }

    return sum
};
