/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 *
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (53.85%)
 * Likes:    1134
 * Dislikes: 0
 * Total Accepted:    705.8K
 * Total Submissions: 1.3M
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,1,2]
 * 输出：[1,2]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [1,1,2,3,3]
 * 输出：[1,2,3]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点数目在范围 [0, 300] 内
 * -100 <= Node.val <= 100
 * 题目数据保证链表已经按升序 排列
 *
 *
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
var deleteDuplicates = function (head) {
  if (head === null) return null;

  let prev = head;
  let curr = head.next;
  while (curr) {
    while (curr && prev.val === curr.val) curr = curr.next;
    if (curr) {
      prev.next = curr;
      prev = curr;
      curr = curr.next;
    } else {
      prev.next = null;
    }
  }

  //   let curr = head;
  //   while (curr) {
  //     if (curr.next && curr.val === curr.next.val) {
  //       curr.next = curr.next.next;
  //     } else {
  //       curr = curr.next;
  //     }
  //   }

  return head;
};
// @lc code=end
