/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const len = nums.length;
  const hash = new Map();
  const result = [];
  for (let i = 0; i < len; i++) {
    let v = target - nums[i];
    if (hash.get(v) !== undefined) {
      result.push(i);
      result.push(hash.get(v));
      break;
    } else {
      hash.set(nums[i], i);
    }
  }

  return result;
};

twoSum([2, 7, 11, 15], 9);
// @lc code=end
