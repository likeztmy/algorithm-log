/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode.cn/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (66.46%)
 * Likes:    3490
 * Dislikes: 0
 * Total Accepted:    1.7M
 * Total Submissions: 2.5M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 *
 *
 * 示例 2：
 *
 *
 * 输入：l1 = [], l2 = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：l1 = [], l2 = [0]
 * 输出：[0]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 两个链表的节点数目范围是 [0, 50]
 * -100
 * l1 和 l2 均按 非递减顺序 排列
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let p1 = list1;
  let p2 = list2;
  let list = null;
  let p = null;
  let q = null;
  while (p1 && p2) {
    if (p1.val <= p2.val) {
      q = p1;
      p1 = p1.next;
      q.next = null;
    } else {
      q = p2;
      p2 = p2.next;
      q.next = null;
    }

    if (!list) {
      list = q;
      p = list;
    } else {
      p.next = q;
      p = q;
    }
  }

  if (p1) {
    if (list) {
      p.next = p1;
    } else {
      list = p1;
    }
  }

  if (p2) {
    if (list) {
      p.next = p2;
    } else {
      list = p2;
    }
  }

  return list;
};
// @lc code=end
