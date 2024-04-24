/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode.cn/problems/3sum/description/
 *
 * algorithms
 * Medium (37.88%)
 * Likes:    6834
 * Dislikes: 0
 * Total Accepted:    1.8M
 * Total Submissions: 4.7M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j !=
 * k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
 *
 * 你返回所有和为 0 且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 解释：
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
 * 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
 * 注意，输出的顺序和三元组的顺序并不重要。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,1,1]
 * 输出：[]
 * 解释：唯一可能的三元组和不为 0 。
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [0,0,0]
 * 输出：[[0,0,0]]
 * 解释：唯一可能的三元组和为 0 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 3 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const results = [];
  const len = nums.length;
  const target = 0;

  if (len < 3) return results;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > target) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = len - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === target) {
        results.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      } else if (sum > target) {
        k--;
      } else {
        j++;
      }
    }
  }

  return results;
};
// @lc code=end
// 000
