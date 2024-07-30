/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode.cn/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (77.70%)
 * Likes:    3636
 * Dislikes: 0
 * Total Accepted:    874.8K
 * Total Submissions: 1.1M
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：["()"]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 8
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];

  function dfs(openP, closeP, s) {
    if (openP === closeP && openP + closeP === n * 2) {
      res.push(s);
      return;
    }

    if (openP < n) {
      dfs(openP + 1, closeP, s + "(");
    }

    if (closeP < openP) {
      dfs(openP, closeP + 1, s + ")");
    }
  }

  dfs(0, 0, "");
  return res;
};
// @lc code=end
