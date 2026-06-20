/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next) return;
    // 1. 找中点
    let slow = head, fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // slow 指向中点（对于奇数长度，正好中间；偶数长度，中间偏左）
    let second = slow.next;
    slow.next = null; // 断开

    // 2. 反转后半部分
    let prev = null;
    let curr = second;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    // prev 是反转后的头
    let head2 = prev;

    // 3. 合并两个链表：head1 和 head2
    let first = head;
    let secondList = head2;
    while (secondList) {
        let next1 = first.next;
        let next2 = secondList.next;
        first.next = secondList;
        secondList.next = next1;
        first = next1;
        secondList = next2;
    }
};