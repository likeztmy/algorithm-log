/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode.cn/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (75.95%)
 * Likes:    1168
 * Dislikes: 0
 * Total Accepted:    533.6K
 * Total Submissions: 701K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
 *
 * 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 *
 *
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: numRows = 5
 * 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 *
 *
 * 示例 2:
 *
 *
 * 输入: numRows = 1
 * 输出: [[1]]
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = [[1]];
  if (numRows === 1) return result;
  for (let i = 1; i < numRows; i++) {
    if (i === 1) result.push([1, 1]);
    else {
      const nums = [1];
      for (let j = 1; j < i; j++) {
        nums[j] = result[i - 1][j - 1] + result[i - 1][j];
      }
      nums.push(1);
      result.push(nums);
    }
  }
  return result;
};
// @lc code=end
