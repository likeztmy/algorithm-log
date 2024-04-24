/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 *
 * https://leetcode.cn/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (49.92%)
 * Likes:    2308
 * Dislikes: 0
 * Total Accepted:    848.4K
 * Total Submissions: 1.7M
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi]
 * 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 * 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 *
 *
 * 示例 2：
 *
 *
 * 输入：intervals = [[1,4],[4,5]]
 * 输出：[[1,5]]
 * 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= intervals.length <= 10^4
 * intervals[i].length == 2
 * 0 <= starti <= endi <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const len = intervals.length;
  const results = [];
  intervals.sort((a, b) => a[0] - b[0]);

  let current = intervals[0];

  for (let i = 1; i < len; i++) {
    if (intervals[i][0] <= current[1]) {
      current[1] = Math.max(current[1], intervals[i][1]);
    } else {
      results.push(current);
      current = intervals[i];
    }
  }

  results.push(current);

  return results;
};
// @lc code=end
merge([
  [1, 4],
  [0, 4],
]);
// [[1,3],[2,6],[8,10],[15,18]]
// [[1,6],[8,10],[15,18]]
