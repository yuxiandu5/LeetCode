// 1. return string

// 1. clean orginal string -> remove dash, uppercase all
// 2. take last k elements
//     push to new array
//     remove from clean
// 3. return reversed

function licenseKeyFormatting(s: string, k: number): string {
    let clean = s.split('-').join('').toUpperCase()
    const output = []

    while(clean.length > 0) {
        const group = clean.slice(-k)
        output.push(group)
        clean = clean.slice(0, -k)
    }

    return output.reverse().join('-')
};
