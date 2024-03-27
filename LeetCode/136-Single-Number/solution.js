/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]] += 1;
    }
  }
  for (const property in map) {
    if (map[property] === 1) {
      return property;
    }
  }
};
// Runtime 81ms
// Memory 53.94MB
// https://leetcode.com/problems/single-number/submissions/1214875355
