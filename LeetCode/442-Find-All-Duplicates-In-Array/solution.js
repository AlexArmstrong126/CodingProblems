/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let map = {};
  let dupArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]] += 1;
      dupArr.push(nums[i]);
    }
  }
  return dupArr;
};
// Runtime 83ms
// Memory 59.49MB
// https://leetcode.com/problems/find-all-duplicates-in-an-array/submissions/1213773085?envType=daily-question&envId=2024-03-25
