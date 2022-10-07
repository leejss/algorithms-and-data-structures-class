function maxSubarraySum(nums: number[], len: number) {
  if (nums.length < len) return null;

  let maxSum = 0;
  let prevSum = 0;
  for (let i = 0; i < len; i++) {
    prevSum += nums[i];
    maxSum += nums[i];
  }
  for (let i = 0; i < nums.length - len; i++) {
    const targetSum = prevSum - nums[i] + nums[i + len];

    if (targetSum > prevSum) {
      maxSum = targetSum;
    }
    prevSum = targetSum;
  }
  return maxSum;
}

console.log(maxSubarraySum([1], 1));
