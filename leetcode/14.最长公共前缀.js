/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode.cn/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (43.96%)
 * Likes:    3110
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 2.9M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 *
 *
 * 示例 2：
 *
 *
 * 输入：strs = ["dog","racecar","car"]
 * 输出：""
 * 解释：输入不存在公共前缀。
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] 仅由小写英文字母组成
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const len = strs.length;
  let shorSrt = strs[0];
  const result = [];
  for (let i = 0; i < len; i++) {
    shorSrt = shorSrt.length > strs[i].length ? strs[i] : shorSrt;
  }

  for (let i = 0; i < shorSrt.length; i++) {
    let letter = strs[0][i];
    let flag = true;
    for (let j = 1; j < len; j++) {
      if (strs[j][i] !== letter) {
        flag = false;
        break;
      }
    }
    if (flag) result.push(letter);
    else break;
  }

  return result.join("");
};
// @lc code=end
