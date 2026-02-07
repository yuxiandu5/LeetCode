function detectCapitalUse(word: string): boolean {
    if(word === word.toUpperCase()) return true
    if(word === word.toLowerCase()) return true

    const firstLetter = word[0]
    const rest = word.slice(1)

    if(firstLetter === firstLetter.toUpperCase() &&
        rest === rest.toLowerCase()
    ) return true

    return false
}
