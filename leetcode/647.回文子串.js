/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 *
 * https://leetcode.cn/problems/palindromic-substrings/description/
 *
 * algorithms
 * Medium (67.33%)
 * Likes:    1348
 * Dislikes: 0
 * Total Accepted:    347.1K
 * Total Submissions: 514.4K
 * Testcase Example:  '"abc"'
 *
 * 给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。
 *
 * 回文字符串 是正着读和倒过来读一样的字符串。
 *
 * 子字符串 是字符串中的由连续字符组成的一个序列。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "abc"
 * 输出：3
 * 解释：三个回文子串: "a", "b", "c"
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "aaa"
 * 输出：6
 * 解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 1000
 * s 由小写英文字母组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const m = s.length;
  const dp = new Array(m).fill(null);
  let ans = 0;

  for (let i = 0; i < m; i++) {
    dp[i] = new Array(m).fill(false);
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = i; j < m; j++) {
      if (s[i] === s[j]) {
        if (j - i <= 1) {
          ans++;
          dp[i][j] = true;
        } else if (dp[i + 1][j - 1]) {
          ans++;
          dp[i][j] = true;
        }
      }
    }
  }
  return ans;
};
// @lc code=end
