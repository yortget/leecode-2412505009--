/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;
    const n = s.length;

    const expandAroundCenter = (left, right) => {
        let cnt = 0;
        while (left >= 0 && right < n && s[left] === s[right]) {
            cnt++;         
            left--;
            right++;
        }
        return cnt;
    };

    for (let i = 0; i < n; i++) {
        count += expandAroundCenter(i, i);
        count += expandAroundCenter(i, i + 1);
    }

    return count;
};