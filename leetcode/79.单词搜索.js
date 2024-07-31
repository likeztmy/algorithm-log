/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 *
 * https://leetcode.cn/problems/word-search/description/
 *
 * algorithms
 * Medium (46.96%)
 * Likes:    1848
 * Dislikes: 0
 * Total Accepted:    549.6K
 * Total Submissions: 1.2M
 * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
 *
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false
 * 。
 *
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
 * "ABCCED"
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
 * "SEE"
 * 输出：true
 *
 *
 * 示例 3：
 *
 *
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word =
 * "ABCB"
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == board.length
 * n = board[i].length
 * 1
 * 1
 * board 和 word 仅由大小写英文字母组成
 *
 *
 *
 *
 * 进阶：你可以使用搜索剪枝的技术来优化解决方案，使其在 board 更大的情况下可以更快解决问题？
 *
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const xlen = board[0].length;
  const ylen = board.length;
  const dfs = (x, y, k) => {
    if (k === word.length) return true;
    if (x < 0 || y < 0 || x >= xlen || y >= ylen || board[y][x] !== word[k])
      return false;
    const temp = board[y][x];
    board[y][x] = "";
    const result =
      dfs(x - 1, y, k + 1) ||
      dfs(x, y - 1, k + 1) ||
      dfs(x, y + 1, k + 1) ||
      dfs(x + 1, y, k + 1);
    board[y][x] = temp;
    return result;
  };

  for (let i = 0; i < ylen; i++) {
    for (let j = 0; j < xlen; j++) {
      if (dfs(j, i, 0)) return true;
    }
  }
  return false;
};
// @lc code=end
