/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let ans = [];
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < nums.length; i++) {
      ans.push(nums[i]);
    }
  }

  return ans;
};
// Runtime 72ms
// Memory 52.56MB
// https://leetcode.com/problems/concatenation-of-array/submissions/1219529910
