/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
    const n = preorder.length;
    const idxMap = new Map();
    postorder.forEach((val, i) => idxMap.set(val, i));
    
    function build(preStart, preEnd, postStart, postEnd) {
        if (preStart > preEnd) return null;
        const rootVal = preorder[preStart];
        const root = new TreeNode(rootVal);
        if (preStart === preEnd) return root;
        
        const leftRootVal = preorder[preStart + 1];
        const leftRootIdx = idxMap.get(leftRootVal);
        const leftSize = leftRootIdx - postStart + 1;
        
        root.left = build(preStart + 1, preStart + leftSize, postStart, leftRootIdx);
        root.right = build(preStart + leftSize + 1, preEnd, leftRootIdx + 1, postEnd - 1);
        
        return root;
    }
    
    return build(0, n - 1, 0, n - 1);
};