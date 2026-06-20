/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    if (!grid || grid.length === 0) return 0;
    const rows = grid.length;
    const cols = grid[0].length;
    let maxArea = 0;

    const directions = [[1,0],[-1,0],[0,1],[0,-1]];

    const dfs = (r, c) => {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) {
            return 0;
        }
        grid[r][c] = 0; 
        let area = 1;
        for (const [dr, dc] of directions) {
            area += dfs(r + dr, c + dc);
        }
        return area;
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                const currentArea = dfs(i, j);
                if (currentArea > maxArea) maxArea = currentArea;
            }
        }
    }

    return maxArea;
};