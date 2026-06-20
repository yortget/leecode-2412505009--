/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return null;
    let leftmost = root;
    while (leftmost.left) {
        let head = leftmost;
        while (head) {
            // 连接左子节点和右子节点
            head.left.next = head.right;
            // 连接右子节点和下一个节点的左子节点
            if (head.next) {
                head.right.next = head.next.left;
            }
            head = head.next;
        }
        leftmost = leftmost.left;
    }
    return root;
};