// return array

// 1. for loop, starting from square root (area) and increment
// 2. treat the cur as l if l is divisible by area meaning bingo
// 3. w = area / cur
// 4. return [cur, w]

function constructRectangle(area: number): number[] {
    let w = Math.floor(Math.sqrt(area))

    while(area % w !== 0) {
        w--
    }

    return [area/w, w]
};
