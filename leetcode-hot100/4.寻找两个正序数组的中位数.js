/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 *
 * https://leetcode.cn/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (42.25%)
 * Likes:    7122
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 2.6M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 * 
 * 算法的时间复杂度应该为 O(log (m+n)) 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2.00000
 * 解释：合并数组 = [1,2,3] ，中位数 2
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums1 = [1,2], nums2 = [3,4]
 * 输出：2.50000
 * 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
 * 
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * nums1.length == m
 * nums2.length == n
 * 0 <= m <= 1000
 * 0 <= n <= 1000
 * 1 <= m + n <= 2000
 * -10^6 <= nums1[i], nums2[i] <= 10^6
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const nums = [];
    const len1 = nums1.length;
    const len2 = nums2.length;
    let len;
    if((len1 + len2) % 2 === 0){
        len = (len1 + len2) / 2 + 1;
    } else {
        len = (len1 + len2 + 1) / 2;
    }

    let i =0, j = 0, k = 0;
    while(i < len1 && j < len2 && k < len) {
        if(nums1[i] < nums2[j]){
            nums[k] = nums1[i];
            i++;
        } else {
            nums[k] = nums2[j];
            j++;
        }
        k++;
    }

    if(i < len1){
        while(k < len){
            nums[k] = nums1[i];
            i++;
            k++;
        }
    }

    if(j < len2){
        while(k < len){
            nums[k] = nums2[j];
            j++;
            k++;
        }
    }

    if((len1 + len2) % 2 === 0){
        return (nums[len - 1] + nums[len - 2]) / 2;
    } else {
        return nums[len - 1];
    }
};
// @lc code=end

