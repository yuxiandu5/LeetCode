function mergeAlternately(word1: string, word2: string): string {
    let result = '';
    const n1 = word1.length, n2 = word2.length;
    
    for(let i = 0; i < Math.max(n1, n2); i++) {
        if(i < n1) result += word1[i];
        if(i < n2) result += word2[i];
    }
    return result;
}
