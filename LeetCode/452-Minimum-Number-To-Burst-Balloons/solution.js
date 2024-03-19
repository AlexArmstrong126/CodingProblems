/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  let sorted = points.sort((a, b) => {
    return a[1] - b[1];
  });
  let prev = sorted[0][1];
  let count = 0;
  let total = sorted.length;
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i][0] <= prev && sorted[i][1] >= prev) {
      count++;
    } else {
      prev = sorted[i][1];
    }
  }
  return total - count;
};
// Runtime 210ms
// Memory 73.21MB
// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/submissions/1207680967
