/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let set = new Set(nums);
  let missing = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      missing.push(i);
    }
  }
  return missing;
};
// Runtime 90ms
// Memory 64.62MB
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/submissions/1213832792
