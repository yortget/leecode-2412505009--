/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const n = edges.length;
    const parent = new Array(n + 1).fill(0).map((_, i) => i);
    const rank = new Array(n + 1).fill(0);

    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    function union(x, y) {
        let rx = find(x), ry = find(y);
        if (rx === ry) return false;
        if (rank[rx] < rank[ry]) {
            parent[rx] = ry;
        } else if (rank[rx] > rank[ry]) {
            parent[ry] = rx;
        } else {
            parent[ry] = rx;
            rank[rx]++;
        }
        return true;
    }

    for (const [u, v] of edges) {
        if (!union(u, v)) {
            return [u, v];
        }
    }
    return [];
};