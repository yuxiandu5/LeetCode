function isPalindrome(s: string): boolean {
    const string = s.toLowerCase().replace(/[^a-z0-9]/g, '')
    return string === string.split('').reverse().join('')
};
