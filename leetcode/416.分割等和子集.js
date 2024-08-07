/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 *
 * https://leetcode.cn/problems/partition-equal-subset-sum/description/
 *
 * algorithms
 * Medium (52.43%)
 * Likes:    2114
 * Dislikes: 0
 * Total Accepted:    578.6K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,5,11,5]'
 *
 * 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,5,11,5]
 * 输出：true
 * 解释：数组可以分割成 [1, 5, 5] 和 [11] 。
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,2,3,5]
 * 输出：false
 * 解释：数组不能分割成两个元素和相等的子集。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;
  const half = sum / 2;
  const dp = [];
  dp[0] = true;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    for (let j = half; j >= num; j--) {
      dp[j] = dp[j] || dp[j - num];
    }
  }
  return dp[half] ?? false;
};
// @lc code=end
