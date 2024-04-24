/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const len = strs.length;
  const hash = new Map();
  let result = [];
  for (let i = 0; i < len; i++) {
    let k = strs[i].split("").sort().join("");
    if (hash.get(k)) {
      let v = hash.get(k);
      v.push(strs[i]);
    } else {
      hash.set(k, [strs[i]]);
    }
  }
  result = [...hash.values()];
  return result;
};
// @lc code=end
