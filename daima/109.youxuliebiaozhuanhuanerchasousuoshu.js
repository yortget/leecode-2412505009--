/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    const vals = [];
    let cur = head;
    while (cur) {
        vals.push(cur.val);
        cur = cur.next;
    }

    const build = (left, right) => {
        if (left > right) return null;
        const mid = Math.floor((left + right) / 2);
        const root = new TreeNode(vals[mid]);
        root.left = build(left, mid - 1);
        root.right = build(mid + 1, right);
        return root;
    };

    return build(0, vals.length - 1);
};