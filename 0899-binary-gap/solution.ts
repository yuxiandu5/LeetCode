// convert to binary
// declare longest, index
// scan from left to right

// 10110
// index = 0
// i = 2
// 2 - 0 > longest && longest = 2 - 0 

function binaryGap(n: number): number {
    const binary = n.toString(2)

    let longest = 0
    let index = binary.split('').findIndex(string => string === '1')

    for(let i = index;i < binary.length;i++) {
        if(binary[i] === '1') {
            const diff = i - index

            longest = Math.max(diff, longest)
            index = i
        }
    }

    return longest
};

// time O(n)
// space O(1)
