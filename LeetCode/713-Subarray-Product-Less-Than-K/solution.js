/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) {
    return 0;
  }

  let totalCount = 0;
  let product = 1;

  for (let left = 0, right = 0; right < nums.length; right++) {
    product *= nums[right];

    while (product >= k) {
      product /= nums[left++];
    }

    totalCount += right - left + 1;
  }

  return totalCount;
};
// Runtime 66ms
// Memory 55.27MB
// https://leetcode.com/problems/subarray-product-less-than-k/submissions/1215828124?envType=daily-question&envId=2024-03-27
