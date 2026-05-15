/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const lastOccurrence = new Map();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        const ch = s[right];
        if (lastOccurrence.has(ch) && lastOccurrence.get(ch) >= left) {
            left = lastOccurrence.get(ch) + 1;
        }
        lastOccurrence.set(ch, right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
};