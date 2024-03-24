/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]] += 1;
      return nums[i];
    }
  }
};
// Runtime 68ms
// Memory 52.02MB
// https://leetcode.com/problems/find-the-duplicate-number/submissions/1212925608?envType=daily-question&envId=2024-03-24
