/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  //sliding window problem
  var sliderHelper = function (nums, goal) {
    let start = 0;
    let current = 0;
    let totalCount = 0;
    for (let i = 0; i < nums.length; i++) {
      current += nums[i];
      while (start <= i && current > goal) {
        current -= nums[start++];
      }
      totalCount += i - start + 1;
    }
    return totalCount;
  };

  return sliderHelper(nums, goal) - sliderHelper(nums, goal - 1);
};
// Runtime 52ms
// Memory 52.44MB
// https://leetcode.com/problems/binary-subarrays-with-sum/submissions/1203913693?envType=daily-question&envId=2024-03-14
