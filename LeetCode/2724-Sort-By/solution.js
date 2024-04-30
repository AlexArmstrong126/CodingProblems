/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  return arr.sort((a, b) => {
    return fn(a) - fn(b);
  });
};
// Runtime 114ms
// Memory 64.66MB
// https://leetcode.com/problems/sort-by/submissions/1239592547
