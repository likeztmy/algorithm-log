/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 *
 * https://leetcode.cn/problems/maximum-product-subarray/description/
 *
 * algorithms
 * Medium (43.20%)
 * Likes:    2274
 * Dislikes: 0
 * Total Accepted:    449.9K
 * Total Submissions: 1.1M
 * Testcase Example:  '[2,3,-2,4]'
 *
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
 *
 * 测试用例的答案是一个 32-位 整数。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: nums = [2,3,-2,4]
 * 输出: 6
 * 解释: 子数组 [2,3] 有最大乘积 6。
 *
 *
 * 示例 2:
 *
 *
 * 输入: nums = [-2,0,-1]
 * 输出: 0
 * 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= nums.length <= 2 * 10^4
 * -10 <= nums[i] <= 10
 * nums 的任何前缀或后缀的乘积都 保证 是一个 32-位 整数
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const dp = new Array(nums.length).fill(-Infinity);
  const dp1 = new Array(nums.length).fill(-Infinity);
  dp[0] = nums[0];
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === 0 || dp[i - 1] === 0) {
      dp[i] = nums[i];
    } else {
      dp[i] = nums[i] * dp[i - 1];
    }
    result = Math.max(dp[i], result);
    // console.log(dp);
  }

  dp1[nums.length - 1] = nums[nums.length - 1];
  result = Math.max(result, dp1[nums.length - 1]);
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] === 0 || dp1[i + 1] === 0) {
      dp1[i] = nums[i];
    } else {
      dp1[i] = dp1[i + 1] * nums[i];
    }
    result = Math.max(result, dp1[i]);
    // console.log(dp1);
  }
  return result;
};
// @lc code=end
