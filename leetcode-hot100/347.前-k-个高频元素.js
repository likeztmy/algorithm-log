/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 *
 * https://leetcode.cn/problems/top-k-frequent-elements/description/
 *
 * algorithms
 * Medium (63.68%)
 * Likes:    1868leetcode/215.数组中的第k个最大元素.js
 * Dislikes: 0
 * Total Accepted:    582.6K
 * Total Submissions: 912.5K
 * Testcase Example:  '[1,1,1,2,2,3]\n2'
 *
 * 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: nums = [1,1,1,2,2,3], k = 2
 * 输出: [1,2]
 *
 *
 * 示例 2:
 *
 *
 * 输入: nums = [1], k = 1
 * 输出: [1]
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * k 的取值范围是 [1, 数组中不相同的元素的个数]
 * 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的
 *
 *
 *
 *
 * 进阶：你所设计算法的时间复杂度 必须 优于 O(n log n) ，其中 n 是数组大小。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const hash = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      let cnt = hash.get(nums[i]);
      cnt++;
      hash.set(nums[i], cnt);
    } else hash.set(nums[i], 1);
  }

  const arrs = [...new Set(nums)];
  let heapSize = arrs.length;

  const swap = (i, j, nums) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };

  const maxHeapify = (i, nums, heapSize) => {
    const l = i * 2 + 1;
    const r = i * 2 + 2;
    let large = i;
    if (l < heapSize && hash.get(nums[l]) > hash.get(nums[large])) {
      large = l;
    }

    if (r < heapSize && hash.get(nums[r]) > hash.get(nums[large])) {
      large = r;
    }
    if (i !== large) {
      swap(i, large, nums);
      maxHeapify(large, nums, heapSize);
    }
  };

  const buildMaxHeap = () => {
    for (let i = Math.floor(arrs.length / 2) - 1; i >= 0; i--) {
      maxHeapify(i, arrs, heapSize);
    }
  };

  const ans = [];

  buildMaxHeap();

  for (let i = arrs.length - 1; i >= arrs.length - k; i--) {
    ans.push(arrs[0]);
    swap(0, i, arrs);
    heapSize--;
    maxHeapify(0, arrs, heapSize);
  }

  return ans;
};
// @lc code=end
