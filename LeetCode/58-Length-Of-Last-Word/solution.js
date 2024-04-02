/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let split = s.split(' ').filter(word => word !== '');
  return split[split.length - 1].length;
};
// Runtime 72ms
// Memory 52.56MB
// https://leetcode.com/problems/length-of-last-word/submissions/1221571497?envType=daily-question&envId=2024-04-01
