/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 *
 * https://leetcode.cn/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (67.88%)
 * Likes:    2317
 * Dislikes: 0
 * Total Accepted:    594K
 * Total Submissions: 874.8K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。
 *
 * k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 *
 * 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[2,1,4,3,5]
 *
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：head = [1,2,3,4,5], k = 3
 * 输出：[3,2,1,4,5]
 *
 *
 *
 * 提示：
 *
 *
 * 链表中的节点数目为 n
 * 1 <= k <= n <= 5000
 * 0 <= Node.val <= 1000
 *
 *
 *
 *
 * 进阶：你可以设计一个只用 O(1) 额外内存空间的算法解决此问题吗？
 *
 *
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (head === null || head.next === null) return head;
  let length = 0;
  let dummyNode = new ListNode(0, head);
  let p0 = dummyNode;
  let curr = head;
  let prev = null;
  let nxt;
  while (head) {
    head = head.next;
    length++;
  }

  for (let i = 0; i < Math.floor(length / k); i++) {
    for (let j = 0; j < k; j++) {
      nxt = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nxt;
    }
    nxt = p0.next;
    nxt.next = curr;
    p0.next = prev;
    p0 = nxt;
  }

  return dummyNode.next;
};
// @lc code=end

//  1 2 3 4 5 6 7 8
// 1 2
