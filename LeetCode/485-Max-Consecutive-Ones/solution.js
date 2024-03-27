/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  // first attempt
  // let splitArr = nums.toString().split(0).sort(function(a,b) {
  //     return b.length - a.length
  // })
  // const largest = [...splitArr[0]].filter((string) => string === '1').length
  // return largest

  // optimised attempt
  let max = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count = 0;
    } else {
      count++;
      if (max < count) {
        max = count;
      }
    }
  }
  return max;
};
// Runtime 62ms
// Memory 51.40MB
// https://leetcode.com/problems/max-consecutive-ones/submissions/1213842303
