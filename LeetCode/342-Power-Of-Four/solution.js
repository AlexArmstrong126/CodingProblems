/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n <= 0) {
    return false;
  }
  while (n > 1) {
    if (n % 4 != 0) {
      return false;
    }
    n /= 4;
  }
  return true;
};
// Runtime 29ms
// Memory 16.12MB