/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 *
 * https://leetcode.cn/problems/palindrome-partitioning/description/
 *
 * algorithms
 * Medium (73.54%)
 * Likes:    1818
 * Dislikes: 0
 * Total Accepted:    430.2K
 * Total Submissions: 583.4K
 * Testcase Example:  '"aab"'
 *
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "aab"
 * 输出：[["a","a","b"],["aa","b"]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "a"
 * 输出：[["a"]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 16
 * s 仅由小写英文字母组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const ans = [];
  const dfs = (currIdx, curr) => {
    if (currIdx === s.length) {
      ans.push([...curr]);
    }
    let str = "";
    for (let i = currIdx; i <= s.length; i++) {
      str = s.slice(currIdx, i);
      if (str !== "" && str === str.split("").reverse().join("")) {
        curr.push(str);
        dfs(i, curr);
        curr.pop();
      }
      str = str.slice(0, str.length - 1);
    }
  };
  dfs(0, []);
  return ans;
};
// @lc code=end
