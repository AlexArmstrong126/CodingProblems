/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  let left = 1;
  let right = n;
  let sumLeft = left;
  let sumRight = right;
  if (n === 1) {
    return n;
  }
  while (left < right) {
    if (sumLeft < sumRight) {
      left++;
      sumLeft += left;
    } else {
      right--;
      sumRight += right;
    }
    if (sumLeft === sumRight && left + 1 === right - 1) {
      return left + 1;
    }
  }
  return -1;
};
// Runtime 52ms
// Memory 49.02MB
// https://leetcode.com/problems/find-the-pivot-integer/submissions/1202370588?envType=daily-question&envId=2024-03-13
