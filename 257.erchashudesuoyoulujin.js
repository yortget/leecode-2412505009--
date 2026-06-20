/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const result = [];
    
    const dfs = (node, path) => {
        if (!node) return;
        
        const currentPath = path ? `${path}->${node.val}` : `${node.val}`;
        
        if (!node.left && !node.right) {
            result.push(currentPath);
            return;
        }
        
        dfs(node.left, currentPath);
        dfs(node.right, currentPath);
    };
    
    dfs(root, '');
    return result;
};