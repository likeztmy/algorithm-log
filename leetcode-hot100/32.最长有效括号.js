/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 *
 * https://leetcode.cn/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (37.98%)
 * Likes:    2526
 * Dislikes: 0
 * Total Accepted:    464.6K
 * Total Submissions: 1.2M
 * Testcase Example:  '"(()"'
 *
 * 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "(()"
 * 输出：2
 * 解释：最长有效括号子串是 "()"
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = ")()())"
 * 输出：4
 * 解释：最长有效括号子串是 "()()"
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = ""
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= s.length <= 3 * 10^4
 * s[i] 为 '(' 或 ')'
 *
 *
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let left = 0;
  let right = 0;
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      left++;
    } else {
      right++;
    }
    if (right > left) {
      right = 0;
      left = 0;
    } else if (left === right) {
      result = Math.max(result, left * 2);
    }
  }

  left = 0;
  right = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ")") {
      right++;
    } else {
      left++;
    }
    if (left > right) {
      left = 0;
      right = 0;
    } else if (left === right) {
      result = Math.max(result, right * 2);
    }
  }
  return result;
};
// @lc code=end
