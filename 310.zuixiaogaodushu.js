/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if (n === 1) return [0];  
    
    const adj = Array.from({ length: n }, () => []);
    const degree = new Array(n).fill(0);
    
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
        degree[u]++;
        degree[v]++;
    }
    
    let queue = [];
    for (let i = 0; i < n; i++) {
        if (degree[i] === 1) queue.push(i);
    }
    
    let remaining = n;
    while (remaining > 2) {
        const size = queue.length;
        remaining -= size;
        const nextQueue = [];
        
        for (let i = 0; i < size; i++) {
            const leaf = queue[i];
            for (const neighbor of adj[leaf]) {
                degree[neighbor]--;
                if (degree[neighbor] === 1) {
                    nextQueue.push(neighbor);
                }
            }
        }
        queue = nextQueue;
    }
    
    return queue;
};