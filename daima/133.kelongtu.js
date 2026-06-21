/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;
    const map = new Map();

    function dfs(original) {
        if (map.has(original)) return map.get(original);
        const clone = new _Node(original.val);
        map.set(original, clone);
        for (let neighbor of original.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }
        return clone;
    }

    return dfs(node);
};