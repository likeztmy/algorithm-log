function findMinPositive(nums) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] <= 0 || nums[i] > len) nums[i] = len + 1;
  }

  console.log(nums);

  for (let i = 0; i < len; i++) {
    const j = Math.abs(nums[i]);
    if (j <= len) {
      nums[j - 1] = -Math.abs(nums[j - 1]);
    }
  }

  console.log(nums);

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }

  return len + 1;
}
