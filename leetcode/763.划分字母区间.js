/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 *
 * https://leetcode.cn/problems/partition-labels/description/
 *
 * algorithms
 * Medium (76.96%)
 * Likes:    1161
 * Dislikes: 0
 * Total Accepted:    250.7K
 * Total Submissions: 324.9K
 * Testcase Example:  '"ababcbacadefegdehijhklij"'
 *
 * 给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。
 *
 * 注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s 。
 *
 * 返回一个表示每个字符串片段的长度的列表。
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "ababcbacadefegdehijhklij"
 * 输出：[9,7,8]
 * 解释：
 * 划分结果为 "ababcbaca"、"defegde"、"hijhklij" 。
 * 每个字母最多出现在一个片段中。
 * 像 "ababcbacadefegde", "hijhklij" 这样的划分是错误的，因为划分的片段数较少。
 *
 * 示例 2：
 *
 *
 * 输入：s = "eccbbbbdec"
 * 输出：[10]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 500
 * s 仅由小写英文字母组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const result = [];
  let startPos = 0;
  let endPos = 0;
  const memo = new Set();
  for (let ch of s) {
    if (!memo.has(ch)) {
      memo.add(ch);
      if (s.indexOf(ch) <= endPos) {
        endPos = Math.max(endPos, s.lastIndexOf(ch));
      } else {
        result.push(endPos - startPos + 1);
        startPos = s.indexOf(ch);
        endPos = s.lastIndexOf(ch);
      }
    }
  }
  result.push(endPos - startPos + 1);
  return result;
};
// @lc code=end
