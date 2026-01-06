// 1. for loop
// 2. if current letter !== "" and prev letter === "" count++


function countSegments(s: string): number {
    let count = 0

    for(let i = 0; i < s.length; i++) {
        if(s[i] !== " " && (i === 0 || s[i - 1] === " ")) {
            count++
        }
    }

    return count
};
