/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 1) return 1;   

    let prev2 = 1;   
    let prev1 = 1;   
    for (let i = 2; i <= n; i++) {
        const cur = prev1 + prev2;
        prev2 = prev1;
        prev1 = cur;
    }
    return prev1;
};