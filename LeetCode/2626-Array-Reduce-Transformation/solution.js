/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  if (nums.length === 0) {
    return init;
  }
  var res = init;
  for (const i of nums) {
    res = fn(res, i);
  }
  return res;
};

// Runtime 62ms
// Memory 50.76MB
