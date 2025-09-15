function mergeAlternately(word1: string, word2: string): string {
    let i = 0
    let j = 0
    let result = []
    while(i < word1.length || j < word2.length){
        if(i < word1.length){
            result.push(word1[i])
            i++
        }
        if(j < word2.length){
            result.push(word2[j])
            j++
        }
    }

    return result.join("")
};
