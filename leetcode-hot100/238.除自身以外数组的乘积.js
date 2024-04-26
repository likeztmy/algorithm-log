/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 *
 * https://leetcode.cn/problems/product-of-array-except-self/description/
 *
 * algorithms
 * Medium (75.45%)
 * Likes:    1770
 * Dislikes: 0
 * Total Accepted:    432.2K
 * Total Submissions: 572.7K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
 *
 * 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
 *
 * 请 不要使用除法，且在 O(n) 时间复杂度内完成此题。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: nums = [1,2,3,4]
 * 输出: [24,12,8,6]
 *
 *
 * 示例 2:
 *
 *
 * 输入: nums = [-1,1,0,-3,3]
 * 输出: [0,0,9,0,0]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 2 <= nums.length <= 10^5
 * -30 <= nums[i] <= 30
 * 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内
 *
 *
 *
 *
 * 进阶：你可以在 O(1) 的额外空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组 不被视为 额外空间。）
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  let sumArr1 = new Array(len).fill(1);
  let sumArr2 = new Array(len).fill(1);
  sumArr1[left++] = nums[0];
  sumArr2[right--] = nums[len - 1];
  let results = [];
  while (left < len && right >= 0) {
    sumArr1[left] = sumArr1[left - 1] * nums[left];
    sumArr2[right] = sumArr2[right + 1] * nums[right];
    left++;
    right--;
  }

  for (let i = 0; i < len; i++) {
    if (i === 0) {
      results[i] = sumArr2[i + 1];
    } else if (i === len - 1) {
      results[i] = sumArr1[i - 1];
    } else {
      results[i] = sumArr1[i - 1] * sumArr2[i + 1];
    }
  }
  return results;
};
// @lc code=end
