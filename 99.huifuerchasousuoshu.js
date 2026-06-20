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
var recoverTree = function(root) {
    let prev = null;
    let x = null, y = null;

    const stack = [];
    let cur = root;
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();

        if (prev && prev.val > cur.val) {
            if (x === null) {
                x = prev;
            }
            y = cur;
        }
        prev = cur;

        cur = cur.right;
    }

    if (x && y) {
        const temp = x.val;
        x.val = y.val;
        y.val = temp;
    }
};