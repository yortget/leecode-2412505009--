/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s || s.length < 1) return "";

    let start = 0, maxLen = 0;

    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1; // 回文长度
    };

    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(i, i);     // 奇数中心
        const len2 = expandAroundCenter(i, i + 1); // 偶数中心
        const len = Math.max(len1, len2);
        if (len > maxLen) {
            maxLen = len;
            start = i - Math.floor((len - 1) / 2);
        }
    }
    return s.substring(start, start + maxLen);
};