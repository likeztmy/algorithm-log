/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if(head === null || head.next === null) return head;

    let fast = head.next;
    let slow = head;
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let mid = slow.next;
    slow.next = null;

    let left = sortList(head);
    let right = sortList(mid);

    let h = new ListNode(0);
    let res = h;

    while(left !== null && right !== null) {
        if(left.val > right.val) {
            h.next = right;
            right = right.next;
        } else {
            h.next = left;
            left = left.next;
        }
        h = h.next;
    }

    h.next = left === null? right : left
    return res.next;
};
// @lc code=end


