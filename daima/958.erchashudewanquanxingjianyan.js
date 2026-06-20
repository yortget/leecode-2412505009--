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
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    if (!root) return true;   
    
    const queue = [root];
    let hasSeenNull = false;
    
    while (queue.length) {
        const node = queue.shift();
        
        if (node === null) {
            hasSeenNull = true;
        } else {
            if (hasSeenNull) return false;
            
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    
    return true;
};