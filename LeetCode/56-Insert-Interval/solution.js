/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  // Initialise array
  let arr = [];
  // variable to loop through array
  let i = 0;

  // add sub array to the array if the final element in the sub array
  // is less than the first array in the new interal array
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    arr.push(intervals[i]);
    i++;
  }

  // Merge overlapping intervals
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    // Set new interval to merge with current interval
    newInterval = [
      Math.min(newInterval[0], intervals[i][0]),
      Math.max(newInterval[1], intervals[i][1]),
    ];
    i++;
  }

  // Add merged interval to the new array
  arr.push(newInterval);

  // Add remaining intervals that are not impacted by the new interval array after newInterval
  while (i < intervals.length) {
    arr.push(intervals[i]);
    i++;
  }
  return arr;
};
// Runtime 84ms
// Memory 54.21MB
// https://leetcode.com/problems/insert-interval/submissions/1206696066?envType=daily-question&envId=2024-03-17
