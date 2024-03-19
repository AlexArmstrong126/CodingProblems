/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  var newString = s
    .toUpperCase()
    .split('')
    .filter(word => word != '-');
  let i = newString.length - 1;
  let count = 0;
  let arr = [];
  while (i >= 0) {
    if (count === k) {
      count = 1;
      arr.push('-');
    } else {
      count++;
    }
    arr.push(newString[i]);
    i--;
  }
  return arr.reverse().join('');
};
// Runtime 64ms
// Memory 59.94MB
// https://leetcode.com/problems/license-key-formatting/submissions/1207720519
