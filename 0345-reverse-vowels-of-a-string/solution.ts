// return string

// 1. create a Vowels set
// 2. two pointers
// 3. if target is vowel for both pointers swap, else increment or decrement pointer until match

function reverseVowels(s: string): string {
    const vowels = new Set('aeiou')
    const string = s.split("")

    let i = 0
    let j = s.length - 1

    while(i < j) {
        const left = s[i].toLowerCase()
        const right = s[j].toLowerCase()
            
        if(!vowels.has(left)) {
            i++
        }

        if(!vowels.has(right)) {
            j--
        }

        if(vowels.has(left) && vowels.has(right)) {
            [string[i], string[j]] = [string[j], string[i]]

            i++
            j--
        }
    }

    return string.join("")
};
