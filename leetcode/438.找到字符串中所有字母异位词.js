/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 *
 * https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/
 *
 * algorithms
 * Medium (53.41%)
 * Likes:    1471
 * Dislikes: 0
 * Total Accepted:    469.8K
 * Total Submissions: 880K
 * Testcase Example:  '"cbaebabacd"\n"abc"'
 *
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
 *
 * 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: s = "cbaebabacd", p = "abc"
 * 输出: [0,6]
 * 解释:
 * 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
 * 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
 *
 *
 * 示例 2:
 *
 *
 * 输入: s = "abab", p = "ab"
 * 输出: [0,1,2]
 * 解释:
 * 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
 * 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
 * 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= s.length, p.length <= 3 * 10^4
 * s 和 p 仅包含小写字母
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const ans = [];
  const memo = {};
  for (let char of p) {
    if (char in memo) {
      memo[char]++;
    } else memo[char] = 1;
  }

  let left = 0;
  let right = 0;
  let count = p.length;
  console.log(memo, count);
  while (right < s.length) {
    if (memo[s[right]] > 0) {
      count--;
    }
    memo[s[right]]--;
    right++;
    if (count === 0) ans.push(left);
    if (right - left === p.length) {
      if (memo[s[left]] >= 0) count++;
      memo[s[left]]++;
      left++;
    }
  }
  return ans;
};
// @lc code=end

/// babc

// { a: 1, b: 1, c: 1 } 3
// 1--- { a: 1, b: 1, c: 0 } 2
// 2--- { a: 1, b: 1, c: 0 } 2
// 1--- { a: 1, b: 0, c: 0 } 1
// 2--- { a: 1, b: 0, c: 0 } 1
// 1--- { a: 0, b: 0, c: 0 } 0
// 2--- { a: 0, b: 0, c: 1 } 1
// 1--- { a: 0, b: 0, c: 1 } 1
// 2--- { a: 0, b: 1, c: 1 } 2
// 1--- { a: 0, b: 0, c: 1 } 1
// 2--- { a: 1, b: 0, c: 1 } 2
// 1--- { a: 0, b: 0, c: 1 } 1
// 2--- { a: 0, b: 0, c: 1, e: NaN } 1
// 1--- { a: 0, b: 0, c: 1, e: NaN } 1
// 2--- { a: 0, b: 1, c: 1, e: NaN } 2
// 1--- { a: 0, b: 1, c: 1, e: NaN } 2
// 2--- { a: 1, b: 1, c: 1, e: NaN } 3
// 1--- { a: 1, b: 1, c: 0, e: NaN } 2
// 2--- { a: 1, b: 2, c: 0, e: NaN } 3
// 1--- { a: 1, b: 2, c: 0, e: NaN } 3
// 2--- { a: 2, b: 2, c: 0, e: NaN } 4
