/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let map = {};
  let count = 0;
  let maxSub = 0;
  for (let i = 0; i < nums.length; i++) {
    count += nums[i] === 0 ? -1 : 1;
    if (count === 0) {
      maxSub = i + 1;
    } else if (count in map) {
      maxSub = Math.max(maxSub, i - map[count]);
    } else {
      map[count] = i;
    }
  }
  return maxSub;
};
// Runtime 109ms
// Memory 58.16MB
// https://leetcode.com/problems/contiguous-array/submissions/1204827444?envType=daily-question&envId=2024-03-16
