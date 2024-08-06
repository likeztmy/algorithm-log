/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 *
 * https://leetcode.cn/problems/find-median-from-data-stream/description/
 *
 * algorithms
 * Hard (54.45%)
 * Likes:    1017
 * Dislikes: 0
 * Total Accepted:    157.2K
 * Total Submissions: 286.7K
 * Testcase Example:  '["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]\n' +
  '[[],[1],[2],[],[3],[]]'
 *
 * 中位数是有序整数列表中的中间值。如果列表的大小是偶数，则没有中间值，中位数是两个中间值的平均值。
 * 
 * 
 * 例如 arr = [2,3,4] 的中位数是 3 。
 * 例如 arr = [2,3] 的中位数是 (2 + 3) / 2 = 2.5 。
 * 
 * 
 * 实现 MedianFinder 类:
 * 
 * 
 * 
 * MedianFinder() 初始化 MedianFinder 对象。
 * 
 * 
 * void addNum(int num) 将数据流中的整数 num 添加到数据结构中。
 * 
 * 
 * double findMedian() 返回到目前为止所有元素的中位数。与实际答案相差 10^-5 以内的答案将被接受。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入
 * ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
 * [[], [1], [2], [], [3], []]
 * 输出
 * [null, null, null, 1.5, null, 2.0]
 * 
 * 解释
 * MedianFinder medianFinder = new MedianFinder();
 * medianFinder.addNum(1);    // arr = [1]
 * medianFinder.addNum(2);    // arr = [1, 2]
 * medianFinder.findMedian(); // 返回 1.5 ((1 + 2) / 2)
 * medianFinder.addNum(3);    // arr[1, 2, 3]
 * medianFinder.findMedian(); // return 2.0
 * 
 * 提示:
 * 
 * 
 * -10^5 <= num <= 10^5
 * 在调用 findMedian 之前，数据结构中至少有一个元素
 * 最多 5 * 10^4 次调用 addNum 和 findMedian
 * 
 * 
 */

// @lc code=start

var MedianFinder = function () {
  this.maxHeap = new Heap(Heap.maxComparator);
  this.minHeap = new Heap(Heap.minComparator);
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.maxHeap.peek() === null || num < this.maxHeap.peek()) {
    this.maxHeap.add(num);
  } else {
    this.minHeap.add(num);
  }

  if (this.maxHeap.size - this.minHeap.size > 1) {
    this.minHeap.add(this.maxHeap.poll());
  } else if (this.minHeap.size - this.maxHeap.size > 1) {
    this.maxHeap.add(this.minHeap.poll());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.maxHeap.size > this.minHeap.size) {
    return this.maxHeap.peek();
  } else if (this.minHeap.size > this.maxHeap.size) {
    return this.minHeap.peek();
  } else {
    return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
  }
};

class Heap {
  constructor(comparator) {
    this.size = 0;
    this.nums = [];
    this.comparator = comparator || Heap.minComparator;
  }

  add(num) {
    this.nums.push(num);
    this.size++;
    this.bubbleUp();
  }
  peek() {
    return this.nums[0] || null;
  }
  poll() {
    const max = this.nums[0];
    const end = this.nums.pop();
    this.size--;
    if (this.nums.length) {
      this.nums[0] = end;
      this.bubbleDown();
    }
    return max;
  }
  bubbleUp() {
    let index = this.nums.length - 1;
    let parent = Math.floor((index - 1) / 2);
    while (this.comparator(this.nums[index], this.nums[parent]) < 0) {
      [this.nums[index], this.nums[parent]] = [
        this.nums[parent],
        this.nums[index],
      ];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }
  bubbleDown() {
    let index = 0,
      length = this.nums.length;

    while (true) {
      let left = null,
        right = null,
        swap = null,
        leftIndex = index * 2 + 1,
        rightIndex = index * 2 + 2;

      if (leftIndex < length) {
        left = this.nums[leftIndex];
        if (this.comparator(left, this.nums[index]) < 0) swap = leftIndex;
      }

      if (rightIndex < length) {
        right = this.nums[rightIndex];
        if (
          (swap !== null && this.comparator(right, left) < 0) ||
          (swap === null && this.comparator(right, this.nums[index]))
        ) {
          swap = rightIndex;
        }
      }
      if (swap === null) break;

      [this.nums[index], this.nums[swap]] = [this.nums[swap], this.nums[index]];
      index = swap;
    }
  }
}

Heap.minComparator = (a, b) => {
  return a - b;
};

Heap.maxComparator = (a, b) => {
  return b - a;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end
