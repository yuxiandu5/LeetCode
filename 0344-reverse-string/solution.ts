// Output
// 1. mutate origin string

// Approach
// 1. two pointers
// 2. while i < j
// 3. swap position


function reverseString(s: string[]): void {
    let i = 0
    let j = s.length - 1

    while(i < j) {
        [s[i], s[j]] = [s[j], s[i]]
        i++
        j--
    }  
};
