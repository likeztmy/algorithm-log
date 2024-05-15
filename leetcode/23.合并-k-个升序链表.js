/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    //    function PriorityQueue() {
    //     this.data = [];
    //    }
  
    //    PriorityQueue.prototype.enqueue = function(val) {
    //     this.data.push(val);
    //     this.data.sort((a, b) => a.val - b.val);
    //    }
  
    //    PriorityQueue.prototype.dequeue = function() {
    //     return this.data.shift();
    //    }
  
    //    PriorityQueue.prototype.isEmpty = function() {
    //     return this.data.length === 0;
    //    }
  
    //    const dummy  = new ListNode(0);
    //    const queue = new PriorityQueue();
    //    let current = dummy;
  
    //    for(let i = 0; i < lists.length; i++) {
    //     if(lists[i]) {
    //       queue.enqueue(lists[i]);
    //     }
    //    }
  
    //    while(!queue.isEmpty()) {
    //     let node = queue.dequeue();
    //     current.next = node;
    //     current = current.next;
    //     if(node.next) {
    //       queue.enqueue(node.next);
    //     }
    //    }
  
    //    return dummy.next;
  
    const result = lists
      .reduce((prev, cur) => {
        while (cur) {
          prev.push(cur);
          cur = cur.next;
        }
        return prev;
      }, [])
      .sort((a, b) => a.val - b.val)
      .reduceRight((prev, cur) => {
        (cur.next = prev), (prev = cur), prev;
      }, null);
      return result;
  };
  // @lc code=end
  