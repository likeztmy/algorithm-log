/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 *
 * https://leetcode.cn/problems/longest-consecutive-sequence/description/
 *
 * algorithms
 * Medium (51.86%)
 * Likes:    2063
 * Dislikes: 0
 * Total Accepted:    619.3K
 * Total Submissions: 1.2M
 * Testcase Example:  '[100,4,200,1,3,2]'
 *
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 *
 * 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [100,4,200,1,3,2]
 * 输出：4
 * 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,3,7,2,5,8,4,6,0,1]
 * 输出：9
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * -10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const len = nums.length;
  if (len === 0) return 0;

  const hash = new Set();

  for (let i = 0; i < len; i++) {
    hash.add(nums[i]);
  }

  let max = 1;

  for (let i = 0; i < len; i++) {
    if (hash.delete(nums[i])) {
      let current = nums[i];
      let d = 1;
      while (hash.delete(current + 1)) current++;
      d += current - nums[i];
      current = nums[i];
      while (hash.delete(current - 1)) current--;
      d += nums[i] - current;

      max = Math.max(max, d);
    }
  }
  return max;
};
// @lc code=end
