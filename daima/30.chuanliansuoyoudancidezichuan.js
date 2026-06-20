/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (!words || words.length === 0) return [];
    const wordLen = words[0].length;
    const wordCount = words.length;
    const totalLen = wordLen * wordCount;
    if (s.length < totalLen) return [];

    const need = new Map();
    for (const word of words) {
        need.set(word, (need.get(word) || 0) + 1);
    }

    const result = [];

    for (let start = 0; start < wordLen; start++) {
        let left = start;
        let right = start;
        let count = 0; 
        const window = new Map();

        while (right + wordLen <= s.length) {
            const word = s.substring(right, right + wordLen);
            right += wordLen;

            if (!need.has(word)) {
                left = right;
                window.clear();
                count = 0;
                continue;
            }

            window.set(word, (window.get(word) || 0) + 1);
            if (window.get(word) <= need.get(word)) {
                count++;
            } else {
                while (window.get(word) > need.get(word)) {
                    const leftWord = s.substring(left, left + wordLen);
                    window.set(leftWord, window.get(leftWord) - 1);
                    if (window.get(leftWord) < need.get(leftWord)) {
                        count--;
                    }
                    left += wordLen;
                }
            }

            if (count === wordCount) {
                result.push(left);
                const leftWord = s.substring(left, left + wordLen);
                window.set(leftWord, window.get(leftWord) - 1);
                if (window.get(leftWord) < need.get(leftWord)) {
                    count--;
                }
                left += wordLen;
            }
        }
    }

    return result;
};