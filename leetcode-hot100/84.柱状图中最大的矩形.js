/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 *
 * https://leetcode.cn/problems/largest-rectangle-in-histogram/description/
 *
 * algorithms
 * Hard (45.76%)
 * Likes:    2754
 * Dislikes: 0
 * Total Accepted:    430.6K
 * Total Submissions: 936.9K
 * Testcase Example:  '[2,1,5,6,2,3]'
 *
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
 *
 * 求在该柱状图中，能够勾勒出来的矩形的最大面积。
 *
 *
 *
 * 示例 1:
 *
 *
 *
 *
 * 输入：heights = [2,1,5,6,2,3]
 * 输出：10
 * 解释：最大的矩形为图中红色区域，面积为 10
 *
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入： heights = [2,4]
 * 输出： 4
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 0
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  heights.push(0);
  let res = 0;
  let stack = [];
  for (let i = 0; i < heights.length; i++) {
    let heightStart = i;
    while (stack.length && stack[stack.length - 1][1] > heights[i]) {
      let [pos, height] = stack.pop();
      res = Math.max(res, (i - pos) * height);
      heightStart = pos;
    }
    stack.push([heightStart, heights[i]]);
  }
  return res;
};

// @lc code=end
