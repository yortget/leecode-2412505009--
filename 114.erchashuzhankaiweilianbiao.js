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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) return;

    const stack = [root];
    let prev = null;

    while (stack.length) {
        const cur = stack.pop();

        if (prev) {
            prev.right = cur;
            prev.left = null;
        }

        if (cur.right) stack.push(cur.right);
        if (cur.left) stack.push(cur.left);

        prev = cur;
    }
};