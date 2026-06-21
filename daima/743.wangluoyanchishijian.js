/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const graph = new Array(n + 1).fill(0).map(() => []);
    for (const [u, v, w] of times) {
        graph[u].push([v, w]);
    }

    const dist = new Array(n + 1).fill(Infinity);
    dist[k] = 0;
    const visited = new Array(n + 1).fill(false);

    for (let i = 1; i <= n; i++) {
        let u = -1;
        let minDist = Infinity;
        for (let j = 1; j <= n; j++) {
            if (!visited[j] && dist[j] < minDist) {
                minDist = dist[j];
                u = j;
            }
        }
        if (u === -1) {
            return -1;
        }
        visited[u] = true;
        for (const [v, w] of graph[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
            }
        }
    }

    let ans = 0;
    for (let i = 1; i <= n; i++) {
        if (dist[i] === Infinity) return -1;
        ans = Math.max(ans, dist[i]);
    }
    return ans;
};