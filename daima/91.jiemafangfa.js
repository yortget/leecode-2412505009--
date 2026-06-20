/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const n = s.length;
    if (n === 0 || s[0] === '0') return 0;

    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;   
    dp[1] = 1;         

    for (let i = 2; i <= n; i++) {
        const oneDigit = s[i - 1];       
        const twoDigits = s[i - 2] + s[i - 1]; 

        if (oneDigit !== '0') {
            dp[i] += dp[i - 1];
        }

        if (twoDigits >= '10' && twoDigits <= '26') {
            dp[i] += dp[i - 2];
        }
    }

    return dp[n];
};