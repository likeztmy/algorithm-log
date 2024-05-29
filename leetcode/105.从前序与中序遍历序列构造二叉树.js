/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 *
 * https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (71.63%)
 * Likes:    2308
 * Dislikes: 0
 * Total Accepted:    654.8K
 * Total Submissions: 914K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder
 * 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * 输出: [3,9,20,null,null,15,7]
 *
 *
 * 示例 2:
 *
 *
 * 输入: preorder = [-1], inorder = [-1]
 * 输出: [-1]
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= preorder.length <= 3000
 * inorder.length == preorder.length
 * -3000 <= preorder[i], inorder[i] <= 3000
 * preorder 和 inorder 均 无重复 元素
 * inorder 均出现在 preorder
 * preorder 保证 为二叉树的前序遍历序列
 * inorder 保证 为二叉树的中序遍历序列
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const n = preorder.length;

  const hash = new Map();
  for (let i = 0; i < n; i++) {
    hash.set(inorder[i], i);
  }

  const build = (preL, preR, inL, inR) => {
    if (preL > preR) return null;
    const leftSize = hash.get(preorder[preL]) - inL;
    const pre1 = preL + 1;
    const pre2 = preL + leftSize + 1;
    const in1 = inL;
    const in2 = inL + leftSize;
    const left = build(pre1, pre2 - 1, in1, in2 - 1);
    const right = build(pre2, preR, in2 + 1, inR);
    return new TreeNode(preorder[preL], left, right);
  };

  return build(0, n - 1, 0, n - 1);
};
// @lc code=end

// 1 2 3 4 5 6
// 3 2 4 1 6 5
