/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  let happy = Math.ceil(nums.length / 2);

  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]] = map[nums[i]] + 1;
      if (map[nums[i]] >= happy) {
        return nums[i];
      }
    }
  }
};
// Runtime 63ms
// Memory 50.77MB
// https://leetcode.com/problems/majority-element/submissions/1204840121
