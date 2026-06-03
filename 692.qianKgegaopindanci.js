/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const freq = new Map();
    for (const word of words) {
        freq.set(word, (freq.get(word) || 0) + 1);
    }
    
    const entries = Array.from(freq.entries());
    entries.sort((a, b) => {
        if (a[1] !== b[1]) {
            return b[1] - a[1];
        }
        return a[0].localeCompare(b[0]);
    });
    
    return entries.slice(0, k).map(entry => entry[0]);
};