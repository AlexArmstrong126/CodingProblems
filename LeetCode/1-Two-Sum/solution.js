/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let otherNumber = target - nums[i];

    if (otherNumber in map) {
      return [map[otherNumber], i];
    }
    map[nums[i]] = i;
  }
  return null;
};
// Runtime 55ms
// Memory 50.96MB
// https://leetcode.com/problems/two-sum/submissions/1204832994
