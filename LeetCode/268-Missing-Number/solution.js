/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // first attempt
  // n = nums.length
  // let sorted = nums.sort()
  // let i = 0
  // while(i <= n){
  //     if(!sorted.includes(i)){
  //     return i
  //     }
  //     i++
  // }

  // More optimised
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return (nums.length * (nums.length + 1)) / 2 - sum;
};
// Runtime 46ms
// Memory 50.76MB
// https://leetcode.com/problems/missing-number/submissions/1214866716
