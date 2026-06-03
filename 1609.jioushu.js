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
var isEvenOddTree = function(root) {
    if (!root) return true;
    let queue = [root];
    let level = 0;
    
    while (queue.length) {
        let size = queue.length;
        let prev = null; 
        
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            let val = node.val;
            
            if (level % 2 === 0) {
                if (val % 2 === 0) return false;
                if (prev !== null && val <= prev) return false;
            } else {
                if (val % 2 !== 0) return false;
                if (prev !== null && val >= prev) return false;
            }
            
            prev = val;
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        level++;
    }
    
    return true;
};