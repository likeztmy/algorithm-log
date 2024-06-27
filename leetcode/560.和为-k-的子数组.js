/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 *
 * https://leetcode.cn/problems/subarray-sum-equals-k/description/
 *
 * algorithms
 * Medium (44.09%)
 * Likes:    2392
 * Dislikes: 0
 * Total Accepted:    482.1K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,1,1]\n2'
 *
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
 *
 * 子数组是数组中元素的连续非空序列。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,1,1], k = 2
 * 输出：2
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,2,3], k = 3
 * 输出：2
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 2 * 10^4
 * -1000 <= nums[i] <= 1000
 * -10^7 <= k <= 10^7
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const s = new Array().fill(nums.length + 1, 0);
  for (let i = 0; i < nums.length; i++) {
    s[i + 1] = s[i] + nums[i];
  }

  const cnt = new Map();
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    ans += cnt.get(s[i] - k) ?? 0;
    cnt.set(s[i], (cnt.get(s[i]) ?? 0) + 1);
  }
  return ans;
};
// @lc code=end

// 0 1 2 3
