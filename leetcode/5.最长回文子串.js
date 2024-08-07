/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode.cn/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (38.34%)
 * Likes:    7263
 * Dislikes: 0
 * Total Accepted:    1.7M
 * Total Submissions: 4.5M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的 回文 子串。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "cbbd"
 * 输出："bb"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 1000
 * s 仅由数字和英文字母组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const m = s.length;
  const dp = new Array(m).fill(null);
  let pos = [0, 0];
  let ans = s.slice(0, 1);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(m).fill(false);
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = i; j < m; j++) {
      if (s[i] === s[j]) {
        if (j - i <= 1) {
          dp[i][j] = true;
          if (pos[1] - pos[0] < j - i) {
            ans = s.slice(i, j + 1);
            pos = [i, j];
          }
        } else if (dp[i + 1][j - 1]) {
          dp[i][j] = true;
          if (pos[1] - pos[0] < j - i) {
            ans = s.slice(i, j + 1);
            pos = [i, j];
          }
        }
      }
    }
  }
  return ans;
};
// @lc code=end
