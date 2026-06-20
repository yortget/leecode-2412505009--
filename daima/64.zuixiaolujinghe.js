/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (!grid || grid.length === 0 || grid[0].length === 0) return 0;
    
    const m = grid.length;
    const n = grid[0].length;
    const dp = new Array(n).fill(0);
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                dp[j] = grid[i][j];
            } else if (i === 0) {
                dp[j] = dp[j - 1] + grid[i][j];
            } else if (j === 0) {
                dp[j] = dp[j] + grid[i][j];
            } else {
                dp[j] = grid[i][j] + Math.min(dp[j], dp[j - 1]);
            }
        }
    }
    
    return dp[n - 1];
};