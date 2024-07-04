/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode.cn/problems/add-binary/description/
 *
 * algorithms
 * Easy (53.07%)
 * Likes:    1210
 * Dislikes: 0
 * Total Accepted:    404.3K
 * Total Submissions: 760.4K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入:a = "11", b = "1"
 * 输出："100"
 *
 * 示例 2：
 *
 *
 * 输入：a = "1010", b = "1011"
 * 输出："10101"
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= a.length, b.length <= 10^4
 * a 和 b 仅由字符 '0' 或 '1' 组成
 * 字符串如果不是 "0" ，就不含前导零
 *
 *
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let alen = a.length;
  let blen = b.length;
  let i = alen - 1;
  let j = blen - 1;
  let carry = 0;
  const numArr = [];
  while (i > -1 && j > -1) {
    const sum = Number(a[i]) + Number(b[j]) + carry;
    const num = sum % 2;
    carry = Math.floor(sum / 2);
    numArr.unshift(num);
    i--;
    j--;
  }

  while (i > -1) {
    const sum = Number(a[i]) + carry;
    const num = sum % 2;
    carry = Math.floor(sum / 2);
    numArr.unshift(num);
    i--;
  }

  while (j > -1) {
    const sum = Number(b[j]) + carry;
    const num = sum % 2;
    carry = Math.floor(sum / 2);
    numArr.unshift(num);
    j--;
  }

  if (carry > 0) numArr.unshift(carry);

  return numArr.join("");
};
