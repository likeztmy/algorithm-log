/*
 * @lc app=leetcode.cn id=994 lang=javascript
 *
 * [994] 腐烂的橘子
 *
 * https://leetcode.cn/problems/rotting-oranges/description/
 *
 * algorithms
 * Medium (52.18%)
 * Likes:    910
 * Dislikes: 0
 * Total Accepted:    201K
 * Total Submissions: 383K
 * Testcase Example:  '[[2,1,1],[1,1,0],[0,1,1]]'
 *
 * 在给定的 m x n 网格 grid 中，每个单元格可以有以下三个值之一：
 *
 *
 * 值 0 代表空单元格；
 * 值 1 代表新鲜橘子；
 * 值 2 代表腐烂的橘子。
 *
 *
 * 每分钟，腐烂的橘子 周围 4 个方向上相邻 的新鲜橘子都会腐烂。
 *
 * 返回 直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1 。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：grid = [[2,1,1],[1,1,0],[0,1,1]]
 * 输出：4
 *
 *
 * 示例 2：
 *
 *
 * 输入：grid = [[2,1,1],[0,1,1],[1,0,1]]
 * 输出：-1
 * 解释：左下角的橘子（第 2 行， 第 0 列）永远不会腐烂，因为腐烂只会发生在 4 个方向上。
 *
 *
 * 示例 3：
 *
 *
 * 输入：grid = [[0,2]]
 * 输出：0
 * 解释：因为 0 分钟时已经没有新鲜橘子了，所以答案就是 0 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 10
 * grid[i][j] 仅为 0、1 或 2
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const q = [];
  let count = 0;
  let time = 0;
  const endR = grid.length;
  const endC = grid[0].length;
  const dir = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];
  for (let row = 0; row < endR; row++) {
    for (let col = 0; col < endC; col++) {
      if (grid[row][col] === 1) count++;
      else if (grid[row][col] === 2) q.push([row, col, 0]);
    }
  }

  while (q.length) {
    const [row, col, curr] = q.shift();

    if (grid[row][col] === 1) {
      grid[row][col] = 2;
      time = curr;
      count--;
    }
    for (let [dirR, dirC] of dir) {
      const y = row + dirR;
      const x = col + dirC;
      if (y < 0 || y >= endR || x < 0 || x >= endC || grid[y][x] !== 1) {
        continue;
      } else {
        q.push([row + dirR, col + dirC, curr + 1]);
      }
    }
  }
  return count ? -1 : time;
};
// @lc code=end
